export function fitText(el: HTMLElement, kompressor?: number, options?: any) {
  const settings = {
    minFontSize: -1 / 0,
    maxFontSize: 1 / 0,
    ...options,
  };

  const compressor = kompressor || 1;

  const resizer = function () {
    el.style.fontSize =
      Math.max(
        Math.min(
          el.clientWidth / (compressor * 10),
          parseFloat(settings.maxFontSize)
        ),
        parseFloat(settings.minFontSize)
      ) + "px";
  };

  // Call once to set.
  resizer();

  // Bind events
  window.addEventListener("resize", resizer);
  window.addEventListener("orientationchange", resizer);

  return el;
}
