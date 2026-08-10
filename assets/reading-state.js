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
    if (controls.length === 0) return;

    fetchAllState().then((allState) => {
      controls.forEach((el) => {
        const slug = el.getAttribute("data-reads-slug");
        renderControls(el, slug, allState[slug] || { read: false, revisit: false });
      });
      document.dispatchEvent(new CustomEvent("reads-state-loaded", { detail: { state: allState } }));
    });
  }

  window.ReadsState = { fetchAllState, apiUrl };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
