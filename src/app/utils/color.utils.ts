import {normalizzaStringa} from './data.utils';
import {endWith} from 'rxjs';

export function resolveColorVariable(variableName: string): string {
  const style = getComputedStyle(document.body);
  return style.getPropertyValue(variableName).trim();
}

export function getRandomGradient(categoria: string, rotation: string = '0deg', minStop = 10, maxStop = 90) {
  const startPoint = Math.floor(Math.random() * (100 ));

  const endPoint = Math.floor(Math.random() * (100));
  const categorieStandard = ['ambiente', 'cultura', 'mobilita', 'sicurezza', 'sociale', 'economia'];
  const catNorm = normalizzaStringa(categoria) || categorieStandard[Math.floor(Math.random() * categorieStandard.length)];
  return `linear-gradient(${rotation}, var(--color-gradient-${catNorm}-start) ${Math.min(startPoint, endPoint)}%, var(--color-gradient-${catNorm}-end) ${Math.max(startPoint, endPoint)}%)`
}
