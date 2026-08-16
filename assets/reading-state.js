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
    // it's obvious at a glance what's left.
    const heading = el.closest("h3");
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

  window.ReadsState = { fetchAllState, apiUrl, renderControls };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
