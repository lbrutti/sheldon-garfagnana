import {normalizzaStringa} from './data.utils';

export function resolveColorVariable(variableName: string): string {
  const style = getComputedStyle(document.body);
  return style.getPropertyValue(variableName).trim();
}

export function getRandomGradient(categoria: string, rotation: string = '0deg', minStop = 10, maxStop = 90) {
  const startPoint = Math.floor(Math.random() * (40 - 10 + 1) + 10);
  const endPoint = Math.floor(Math.random() * (80 - 40 + 1) + 40);
  const catNorm = normalizzaStringa(categoria);
  if (!catNorm) return '';
  return `linear-gradient(${rotation}, var(--color-gradient-${catNorm}-start) ${Math.min(startPoint, endPoint)}%, var(--color-gradient-${catNorm}-end) ${Math.max(startPoint, endPoint)}%)`;
}
