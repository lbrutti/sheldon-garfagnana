import {normalizzaStringa} from './data.utils';

export function resolveColorVariable(variableName: string): string {
  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue(variableName).trim();
}

export function getRandomGradient(categoria: string, rotation: string = '0deg', minStop = 10, maxStop = 90) {
  const stopPoint = Math.floor(Math.random() * (maxStop - minStop + 1) + minStop) + '%';
  const categorieStandard = ['ambiente', 'cultura', 'mobilita', 'sicurezza', 'sociale', 'economia'];
  const catNorm = normalizzaStringa(categoria) || categorieStandard[Math.floor(Math.random() * categorieStandard.length)];
  return `linear-gradient(${rotation}, var(--color-gradient-${catNorm}-start), var(--color-gradient-${catNorm}-end) ${stopPoint})`
}
