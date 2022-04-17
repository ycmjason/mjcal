export const interval = (
  fn: () => void,
  options?: number | { immediate?: boolean; wait?: number },
): (() => void) => {
  const { wait = 0, immediate = false } = (() => {
    if (typeof options === 'undefined') return { wait: 0 };
    if (typeof options === 'number') return { wait: options };
    return options;
  })();

  if (immediate) fn();

  const id = window.setInterval(fn, wait);
  return () => window.clearInterval(id);
};
