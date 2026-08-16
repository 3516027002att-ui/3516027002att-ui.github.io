(function () {
  "use strict";

  const config = window.SPECTRAL_THEME;
  const canvas = document.querySelector("#spectral-field");
  const toggle = document.querySelector("#motion-toggle");

  if (!config || !canvas || !window.SpectralField) {
    document.documentElement.classList.add("field-fallback");
    return;
  }

  let field;
  try {
    field = new window.SpectralField(canvas, config);
  } catch (error) {
    console.warn("Spectral field unavailable; using CSS fallback.", error);
    document.documentElement.classList.add("field-fallback");
    return;
  }

  document.documentElement.dataset.renderer = field.available ? "webgl" : "css";

  if (!toggle) return;

  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  let motionEnabled = field.available && !media.matches;

  function syncToggle() {
    toggle.setAttribute("aria-pressed", String(!motionEnabled));
    toggle.title = motionEnabled ? "暂停流光背景" : "恢复流光背景";
    const label = toggle.querySelector(".motion-label");
    if (label) label.textContent = motionEnabled ? "流光" : "静止";
    document.documentElement.dataset.motion = motionEnabled ? "live" : "frozen";
  }

  toggle.addEventListener("click", () => {
    motionEnabled = !motionEnabled;
    field.setMotion(motionEnabled);
    syncToggle();
  });

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", (event) => {
      if (event.matches) {
        motionEnabled = false;
        field.setMotion(false);
        syncToggle();
      }
    });
  }

  syncToggle();
})();
