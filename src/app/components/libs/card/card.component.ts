import {Component, computed, inject, input} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {normalizzaStringa, resolveColorVariable} from '../../../utils';
import {ThemeService} from '../../../services/theme.service';

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
  // Track the active theme so the colours below re-read their CSS variables on change.
  private readonly theme = inject(ThemeService).theme;
  showButtons = input<boolean>(true);
  categoria = input<string>('ambiente');
  startColor = computed(() => {
    this.theme();
    return resolveColorVariable(`--color-gradient-${normalizzaStringa(this.categoria())}-start`);
  });
  endColor = computed(() => {
    this.theme();
    return resolveColorVariable(`--color-gradient-${normalizzaStringa(this.categoria())}-end`);
  });

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIcon('sheldon-info', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/info.svg'));
    iconRegistry.addSvgIcon('sheldon-download', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/download.svg'));
  }
}
