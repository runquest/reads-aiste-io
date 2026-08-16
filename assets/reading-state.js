// Read/revisit state for each story, synced through the Cloudflare Worker +
// KV so it's shared across every device rather than living in one browser's
// localStorage. Looks for any element with [data-reads-slug] and turns it
// into a small "mark read" / "save to revisit" control.
(function () {
  const STATE_API = window.READS_STATE_API;
  const STATE_TOKEN = window.READS_STATE_TOKEN;
  if (!STATE_API || !STATE_TOKEN) return;

  function apiUrl(path) {
    const sep = path.includes("?") ? "&" : "?";
    return `${STATE_API}${path}${sep}token=${encodeURIComponent(STATE_TOKEN)}`;
  }

  function fetchAllState() {
    return fetch(apiUrl("/state"))
      .then((r) => r.json())
      .catch(() => ({}));
  }

  function renderControls(el, slug, state) {
    el.innerHTML = "";
    el.classList.toggle("is-read", !!state.read);
    el.classList.toggle("is-revisit", !!state.revisit);
    // On the issue index, dim the whole heading for already-read stories so
    // it's obvious at a glance what's left. Class-based rather than a tag
    // selector since the lead story's heading is an <h1> (one per page,
    // for outline correctness) while every other story's is an <h3> —
    // both carry this class specifically so this hook doesn't care which.
    const heading = el.closest(".issue-story-heading");
    if (heading) heading.classList.toggle("is-read", !!state.read);

    if (state.hasNote) {
      const noteMark = document.createElement("span");
      noteMark.className = "reads-note-indicator";
      noteMark.textContent = "📝";
      noteMark.title = "Has notes";
      el.appendChild(noteMark);
    }

    const readBtn = document.createElement("button");
    readBtn.type = "button";
    readBtn.className = "reads-btn reads-btn-read";
    readBtn.textContent = state.read ? "✓ Read" : "Mark read";
    readBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggle(el, slug, "read", !state.read);
    });

    const revisitBtn = document.createElement("button");
    revisitBtn.type = "button";
    revisitBtn.className = "reads-btn reads-btn-revisit";
    revisitBtn.textContent = state.revisit ? "★ Revisit" : "Save to revisit";
    revisitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggle(el, slug, "revisit", !state.revisit);
    });

    el.appendChild(readBtn);
    el.appendChild(revisitBtn);
  }

  function toggle(el, slug, field, value) {
    fetch(apiUrl(`/state/${encodeURIComponent(slug)}`), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    })
      .then((r) => r.json())
      .then((newState) => {
        renderControls(el, slug, newState);
        document.dispatchEvent(new CustomEvent("reads-state-changed", { detail: { slug, state: newState } }));
      })
      .catch(() => {});
  }

  function init() {
    const controls = document.querySelectorAll("[data-reads-slug]");
    if (controls.length > 0) {
      fetchAllState().then((allState) => {
        controls.forEach((el) => {
          const slug = el.getAttribute("data-reads-slug");
          renderControls(el, slug, allState[slug] || { read: false, revisit: false, hasNote: false });
        });
        document.dispatchEvent(new CustomEvent("reads-state-loaded", { detail: { state: allState } }));
      });
    }

    initNotes();
    initHighlights();
  }

  // Notes live on the story page only, one per page, so there's no bulk
  // fetch to do — just load and save the single slug present.
  function initNotes() {
    const el = document.querySelector("[data-reads-notes-slug]");
    if (!el) return;

    const slug = el.getAttribute("data-reads-notes-slug");
    const textarea = document.createElement("textarea");
    textarea.className = "reads-notes-input";
    textarea.placeholder = "Notes on this article…";
    textarea.rows = 4;

    const status = document.createElement("span");
    status.className = "reads-notes-status";

    el.appendChild(textarea);
    el.appendChild(status);

    let saveTimer = null;
    function save() {
      status.textContent = "Saving…";
      fetch(apiUrl(`/state/${encodeURIComponent(slug)}/note`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: textarea.value }),
      })
        .then((r) => r.json())
        .then(() => {
          status.textContent = "Saved";
        })
        .catch(() => {
          status.textContent = "Failed to save";
        });
    }

    textarea.addEventListener("input", () => {
      status.textContent = "";
      clearTimeout(saveTimer);
      saveTimer = setTimeout(save, 800);
    });
    textarea.addEventListener("blur", () => {
      clearTimeout(saveTimer);
      save();
    });

    fetch(apiUrl(`/state/${encodeURIComponent(slug)}/note`))
      .then((r) => r.json())
      .then((data) => {
        textarea.value = data.note || "";
      })
      .catch(() => {});
  }

  // --- Highlights & quick-capture notes -----------------------------------
  //
  // Both share one shape and one API list (a quick-capture note is just an
  // annotation with quote: null) — see the Worker's highlights routes.
  // Anchoring works by flattening the article body to one string, recording
  // which DOM text node each character came from, and searching that string
  // for "prefix + quote + suffix". That's viable specifically because
  // fetched article content is cached permanently and story pages never
  // regenerate with different content — the text a highlight was made
  // against is exactly the text it'll be re-found against, every time.

  function flattenText(container) {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    let text = "";
    const map = [];
    let node;
    while ((node = walker.nextNode())) {
      const start = text.length;
      text += node.nodeValue;
      map.push({ node, start, end: text.length });
    }
    return { text, map };
  }

  function domPositionToFlatOffset(map, node, offset) {
    const entry = map.find((e) => e.node === node);
    return entry ? entry.start + offset : null;
  }

  function flatOffsetToDomPosition(map, flatOffset) {
    const entry = map.find((e) => flatOffset >= e.start && flatOffset <= e.end);
    if (entry) return { node: entry.node, offset: flatOffset - entry.start };
    const last = map[map.length - 1];
    return last ? { node: last.node, offset: last.node.nodeValue.length } : null;
  }

  const CONTEXT_LEN = 30;

  function captureSelectionContext(container, range) {
    const { text, map } = flattenText(container);
    const startFlat = domPositionToFlatOffset(map, range.startContainer, range.startOffset);
    const endFlat = domPositionToFlatOffset(map, range.endContainer, range.endOffset);
    if (startFlat == null || endFlat == null) return null;
    return {
      quote: text.slice(startFlat, endFlat),
      prefix: text.slice(Math.max(0, startFlat - CONTEXT_LEN), startFlat),
      suffix: text.slice(endFlat, endFlat + CONTEXT_LEN),
    };
  }

  // Prefers the disambiguated "prefix+quote+suffix" match (handles a quote
  // that occurs more than once in the article); falls back to a bare quote
  // search if the surrounding context doesn't match, rather than failing to
  // render the highlight at all.
  function findRangeForHighlight(container, highlight) {
    const { text, map } = flattenText(container);
    const needle = (highlight.prefix || "") + highlight.quote + (highlight.suffix || "");
    let startFlat, endFlat;
    const idx = text.indexOf(needle);
    if (idx !== -1) {
      startFlat = idx + (highlight.prefix || "").length;
      endFlat = startFlat + highlight.quote.length;
    } else {
      const bareIdx = text.indexOf(highlight.quote);
      if (bareIdx === -1) return null;
      startFlat = bareIdx;
      endFlat = bareIdx + highlight.quote.length;
    }
    const startPos = flatOffsetToDomPosition(map, startFlat);
    const endPos = flatOffsetToDomPosition(map, endFlat);
    if (!startPos || !endPos) return null;
    const range = document.createRange();
    range.setStart(startPos.node, startPos.offset);
    range.setEnd(endPos.node, endPos.offset);
    return range;
  }

  // surroundContents() throws when the range partially selects a non-text
  // node (e.g. a selection crossing into a nested <em> or <a>) — fall back
  // to extract+reinsert, which handles multi-node ranges fine.
  function wrapRange(range, mark) {
    try {
      range.surroundContents(mark);
    } catch {
      const fragment = range.extractContents();
      mark.appendChild(fragment);
      range.insertNode(mark);
    }
  }

  function isFineMouseDevice() {
    return window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function highlightsApiUrl(slug, suffix) {
    return apiUrl(`/state/${encodeURIComponent(slug)}/highlights${suffix || ""}`);
  }

  function fetchHighlights(slug) {
    return fetch(highlightsApiUrl(slug))
      .then((r) => r.json())
      .then((data) => data.highlights || [])
      .catch(() => []);
  }

  function createHighlight(slug, payload) {
    return fetch(highlightsApiUrl(slug), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((r) => r.json());
  }

  function updateHighlight(slug, id, note) {
    return fetch(highlightsApiUrl(slug, `/${encodeURIComponent(id)}`), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    }).then((r) => r.json());
  }

  function deleteHighlight(slug, id) {
    return fetch(highlightsApiUrl(slug, `/${encodeURIComponent(id)}`), { method: "DELETE" }).then((r) => r.json());
  }

  // --- Popover ---------------------------------------------------------

  let openPopoverEl = null;
  let openPopoverCloseHandler = null;

  function closePopover() {
    if (openPopoverEl) {
      openPopoverEl.remove();
      openPopoverEl = null;
    }
    if (openPopoverCloseHandler) {
      document.removeEventListener("mousedown", openPopoverCloseHandler, true);
      openPopoverCloseHandler = null;
    }
  }

  function positionElement(el, rect) {
    const margin = 8;
    let left = rect.left;
    let top = rect.bottom + margin;
    const elRect = el.getBoundingClientRect();
    if (left + elRect.width > window.innerWidth - margin) left = window.innerWidth - elRect.width - margin;
    if (left < margin) left = margin;
    if (top + elRect.height > window.innerHeight - margin) top = rect.top - elRect.height - margin;
    el.style.left = `${Math.max(margin, left)}px`;
    el.style.top = `${Math.max(margin, top)}px`;
  }

  function openPopover(rect, buildContent) {
    closePopover();
    const el = document.createElement("div");
    el.className = "reads-popover";
    buildContent(el, closePopover);
    document.body.appendChild(el);
    positionElement(el, rect);
    openPopoverEl = el;

    openPopoverCloseHandler = (e) => {
      if (!el.contains(e.target)) closePopover();
    };
    // Deferred so the same mousedown/click that opened this popover doesn't
    // immediately close it via the outside-click listener.
    setTimeout(() => document.addEventListener("mousedown", openPopoverCloseHandler, true), 0);

    return el;
  }

  // canEdit=false renders a read-only view with just Delete — used for
  // highlight-anchored notes on touch devices, where creating/editing via
  // text selection is out of scope for now but delete isn't selection-
  // dependent and costs nothing extra to allow.
  function buildViewPopoverContent(entry, { canEdit, onSave, onDelete }) {
    return (el) => {
      let valueEl;
      if (canEdit) {
        valueEl = document.createElement("textarea");
        valueEl.className = "reads-popover-input";
        valueEl.value = entry.note;
        valueEl.rows = 3;
      } else {
        valueEl = document.createElement("div");
        valueEl.className = "reads-popover-text";
        valueEl.textContent = entry.note;
      }
      el.appendChild(valueEl);

      const actions = document.createElement("div");
      actions.className = "reads-popover-actions";

      if (canEdit) {
        const saveBtn = document.createElement("button");
        saveBtn.type = "button";
        saveBtn.className = "reads-btn";
        saveBtn.textContent = "Save";
        saveBtn.addEventListener("click", () => {
          const value = valueEl.value.trim();
          if (!value) return;
          onSave(value);
          closePopover();
        });
        actions.appendChild(saveBtn);
      }

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "reads-btn reads-btn-delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        onDelete();
        closePopover();
      });
      actions.appendChild(deleteBtn);

      el.appendChild(actions);
    };
  }

  function buildComposePopoverContent({ onSave }) {
    return (el) => {
      const textarea = document.createElement("textarea");
      textarea.className = "reads-popover-input";
      textarea.placeholder = "Add a note…";
      textarea.rows = 3;
      el.appendChild(textarea);

      const actions = document.createElement("div");
      actions.className = "reads-popover-actions";

      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "reads-btn";
      saveBtn.textContent = "Save";
      saveBtn.addEventListener("click", () => {
        const value = textarea.value.trim();
        if (!value) return;
        onSave(value);
        closePopover();
      });

      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "reads-btn";
      cancelBtn.textContent = "Cancel";
      cancelBtn.addEventListener("click", closePopover);

      actions.appendChild(saveBtn);
      actions.appendChild(cancelBtn);
      el.appendChild(actions);

      textarea.focus();
    };
  }

  // --- Rendering ---------------------------------------------------------

  // Renders one annotation in both places it can appear — an inline <mark>
  // in the article (anchored entries only) and a row in the notes list
  // (every entry, anchored or not) — sharing one applyEdit/applyDelete pair
  // so acting on either keeps the other in sync. A quote that can no longer
  // be found (content changed) still gets its list row; it just has no mark.
  //
  // canEdit follows the entry, not where it's rendered: anchored entries
  // stay view+delete-only on touch devices even in the list, since that
  // restriction is about not having a great UX for re-selecting text on
  // mobile, which the list doesn't change. Quick-capture entries (no quote)
  // get full edit everywhere, in the list and via their absence of a mark.
  function renderAnnotation(container, listEl, slug, entry) {
    const canEdit = entry.quote ? isFineMouseDevice() : true;
    let mark = null;
    let li = null;
    let textEl = null;

    function applyEdit(value) {
      entry.note = value;
      updateHighlight(slug, entry.id, value);
      if (textEl) textEl.textContent = value;
    }

    function applyDelete() {
      deleteHighlight(slug, entry.id);
      if (mark) mark.replaceWith(...mark.childNodes);
      if (li) li.remove();
    }

    if (entry.quote) {
      const range = findRangeForHighlight(container, entry);
      if (range) {
        mark = document.createElement("mark");
        mark.className = "reads-highlight";
        mark.dataset.highlightId = entry.id;
        wrapRange(range, mark);
        mark.addEventListener("click", (e) => {
          e.preventDefault();
          openPopover(mark.getBoundingClientRect(), buildViewPopoverContent(entry, { canEdit, onSave: applyEdit, onDelete: applyDelete }));
        });
      }
    }

    if (listEl) {
      li = document.createElement("li");
      li.className = "reads-quicknote";

      if (entry.quote) {
        const quoteEl = document.createElement("blockquote");
        quoteEl.className = "reads-quicknote-quote";
        quoteEl.textContent = entry.quote;
        li.appendChild(quoteEl);
      }

      textEl = document.createElement("div");
      textEl.className = "reads-quicknote-text";
      textEl.textContent = entry.note;
      li.appendChild(textEl);

      const meta = document.createElement("div");
      meta.className = "reads-quicknote-meta";
      meta.textContent = new Date(entry.created).toLocaleString();
      li.appendChild(meta);

      const actions = document.createElement("div");
      actions.className = "reads-quicknote-actions";

      if (canEdit) {
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.className = "reads-btn";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
          const textarea = document.createElement("textarea");
          textarea.className = "reads-popover-input";
          textarea.value = entry.note;
          textarea.rows = 3;
          li.replaceChild(textarea, textEl);
          textarea.focus();

          const saveBtn = document.createElement("button");
          saveBtn.type = "button";
          saveBtn.className = "reads-btn";
          saveBtn.textContent = "Save";
          saveBtn.addEventListener("click", () => {
            const value = textarea.value.trim();
            if (!value) return;
            li.replaceChild(textEl, textarea);
            actions.replaceChild(editBtn, saveBtn);
            applyEdit(value);
          });
          actions.replaceChild(saveBtn, editBtn);
        });
        actions.appendChild(editBtn);
      }

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "reads-btn reads-btn-delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", applyDelete);
      actions.appendChild(deleteBtn);

      li.appendChild(actions);
      listEl.appendChild(li);
    }
  }

  // --- Creation ------------------------------------------------------------

  function initQuickCaptureButton(container, slug, listEl) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "reads-quicknote-fab";
    btn.textContent = "+ Quick note";
    btn.addEventListener("click", () => {
      openPopover(btn.getBoundingClientRect(), buildComposePopoverContent({
        onSave: (value) => {
          createHighlight(slug, { quote: null, note: value }).then((entry) => {
            renderAnnotation(container, listEl, slug, entry);
          });
        },
      }));
    });
    document.body.appendChild(btn);
  }

  let selectionButtonEl = null;

  function removeSelectionButton() {
    if (selectionButtonEl) {
      selectionButtonEl.remove();
      selectionButtonEl = null;
    }
  }

  // Selecting text within the article body offers a floating "+ Add note"
  // button, mousedown (not click) so it fires and captures the range before
  // the browser's own click handling clears the selection. Desktop-only for
  // now — touch selection UX (handles, no hover, different event timing) is
  // enough of a different problem that it's deferred rather than bolted on.
  function initHighlightSelection(container, slug, listEl) {
    if (!isFineMouseDevice()) return;

    document.addEventListener("mouseup", () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        removeSelectionButton();
        return;
      }
      const range = selection.getRangeAt(0);
      if (range.collapsed || !container.contains(range.commonAncestorContainer) || range.toString().trim() === "") {
        removeSelectionButton();
        return;
      }

      removeSelectionButton();
      const capturedRange = range.cloneRange();
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "reads-add-highlight-btn";
      btn.textContent = "+ Add note";
      btn.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const rect = capturedRange.getBoundingClientRect();
        const context = captureSelectionContext(container, capturedRange);
        removeSelectionButton();
        selection.removeAllRanges();
        if (!context) return;

        openPopover(rect, buildComposePopoverContent({
          onSave: (value) => {
            // Re-anchor by search (renderAnnotation's own path) rather than
            // reusing capturedRange directly — one code path for "render an
            // entry" whether it's freshly created or loaded from the API,
            // and the content hasn't changed since the selection was made,
            // so the search is guaranteed to find exactly what was selected.
            createHighlight(slug, { ...context, note: value }).then((entry) => {
              renderAnnotation(container, listEl, slug, entry);
            });
          },
        }));
      });

      document.body.appendChild(btn);
      positionElement(btn, range.getBoundingClientRect());
      selectionButtonEl = btn;
    });
  }

  function initHighlights() {
    const container = document.querySelector(".story-body[data-reads-highlights-slug]");
    if (!container) return;

    const slug = container.getAttribute("data-reads-highlights-slug");
    const quicknotesList = document.querySelector(".reads-quicknotes-list");

    initQuickCaptureButton(container, slug, quicknotesList);
    initHighlightSelection(container, slug, quicknotesList);

    fetchHighlights(slug).then((highlights) => {
      highlights.forEach((entry) => renderAnnotation(container, quicknotesList, slug, entry));
    });
  }

  window.ReadsState = { fetchAllState, apiUrl, renderControls };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
