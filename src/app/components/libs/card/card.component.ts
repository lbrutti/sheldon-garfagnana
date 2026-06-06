import {Component, computed, inject, input} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {normalizzaStringa, resolveColorVariable} from '../../../utils';

@Component({
  selector: 'sheldon-card',
  imports: [
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export default class CardComponent {
  showButtons = input<boolean>(true);
  categoria = input<string>('ambiente');
  startColor = computed(() => resolveColorVariable(`--color-gradient-${normalizzaStringa(this.categoria())}-start`));
  endColor = computed(() => resolveColorVariable(`--color-gradient-${normalizzaStringa(this.categoria())}-end`));

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIcon('sheldon-info', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/info.svg'));
    iconRegistry.addSvgIcon('sheldon-download', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/download.svg'));
  }
}
