(function () {
  "use strict";

  const ARTICLE_INTENSITY = 0.15;

  const root = document.documentElement;
  const config = window.SPECTRAL_THEME;
  const canvas = document.querySelector("#spectral-field");

  if (!config || !canvas || !window.SpectralField) {
    root.classList.add("field-fallback");
    return;
  }

  const fieldConfig = root.dataset.page === "article"
    ? { ...config, overallColorIntensity: ARTICLE_INTENSITY }
    : config;

  let field;
  try {
    field = new window.SpectralField(canvas, fieldConfig);
  } catch (error) {
    console.warn("Spectral field unavailable; using CSS fallback.", error);
    root.classList.add("field-fallback");
    return;
  }

  root.dataset.renderer = field.available ? "webgl" : "css";
  if (!field.available) return;

  field.setMotion(false);
  // SpectralField 在尺寸变化时会清空画布，静止状态下它不会自己重画。
  window.addEventListener("resize", () => field.render(performance.now(), true), { passive: true });
})();
