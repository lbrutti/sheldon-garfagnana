/** Resolved colour stops with fixed positions, ready to apply to any CanvasGradient. */
export interface GradientDescriptor {
  stops: { color: string; position: number }[];
}

/**
 * Resolves an array of CSS variable names or raw colour strings into a
 * GradientDescriptor with fixed stop positions.
 *
 * Call this ONCE (e.g. in ngOnInit) so both the colours and the positions
 * are stable for the lifetime of the component — gradients will look identical
 * across repaints and window resizes.
 *
 * @param steps - CSS variable names (e.g. '--color-gradient-a-start') or raw colour strings.
 */
export function resolveGradientDescriptor(steps: string[]): GradientDescriptor {
  const style = getComputedStyle(document.documentElement);
  const colors = steps.map(s =>
    s.startsWith('--') ? (style.getPropertyValue(s).trim() || s) : s
  );
  return {stops: colors.map((color, i) => ({color, position: stopPosition(i, colors.length)}))};
}

/**
 * Creates a CanvasGradient from a pre-resolved GradientDescriptor.
 * Safe to call on every paint — no randomness, no CSS variable resolution.
 */
export function applyGradient(
  ctx: CanvasRenderingContext2D,
  x0: number, y0: number,
  x1: number, y1: number,
  descriptor: GradientDescriptor,
): CanvasGradient {
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  descriptor.stops.forEach(({color, position}) => gradient.addColorStop(position, color));
  return gradient;
}

/**
 * Evenly distributes stop positions across [0, 1].
 * Deterministic — no randomness — so gradients are stable across repaints.
 */
function stopPosition(index: number, total: number): number {
  if (total === 1) return 0;
  return index / (total - 1);
}

export function getRandomGradient(categoria: string, min?: number, max?: number) {
  let colorCat = '';
  switch (categoria) {
    case 'Ambiente':
      colorCat = 'ambiente';
      break;
    case 'Cultura':
      colorCat = 'cultura';
      break;
    case 'Mobilità':
      colorCat = 'mobilita';
      break;
    case 'Sicurezza':
      colorCat = 'sicurezza';
      break;
    case 'Sociale':
      colorCat = 'sociale';
      break;
    default:
      colorCat = ['ambiente', 'cultura', 'mobilita', 'sicurezza', 'sociale'][(Math.random() * 5) % 5];
      break;
  }
  return `linear-gradient(90deg, var(--color-gradient-${colorCat}-start), var(--color-gradient-${colorCat}-end))`

}
