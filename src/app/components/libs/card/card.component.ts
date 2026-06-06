import {Component, computed, ElementRef, inject, input, signal} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {toPng} from 'html-to-image';
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
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  // Track the active theme so the colours below re-read their CSS variables on change.
  private readonly theme = inject(ThemeService).theme;
  showButtons = input<boolean>(true);
  categoria = input<string>('ambiente');
  /** Text shown in the info overlay opened by the info button. */
  infoText = input<string>('');
  startColor = computed(() => {
    this.theme();
    return resolveColorVariable(`--color-gradient-${normalizzaStringa(this.categoria())}-start`);
  });
  endColor = computed(() => {
    this.theme();
    return resolveColorVariable(`--color-gradient-${normalizzaStringa(this.categoria())}-end`);
  });

  /** Whether the info overlay is currently shown over the subheader/content. */
  readonly showInfo = signal(false);

  openInfo(): void {
    this.showInfo.set(true);
  }

  closeInfo(): void {
    this.showInfo.set(false);
  }

  /** True while a PNG export is in flight, used to disable the download button. */
  readonly exporting = signal(false);

  /**
   * Render the card to a PNG. On devices that support sharing files (typically
   * mobile) the native share sheet is offered; otherwise the image is downloaded.
   */
  async exportCard(): Promise<void> {
    if (this.exporting()) return;
    const root = this.host.nativeElement.querySelector('.sheldon-card-root') as HTMLElement | null;
    if (!root) return;

    this.exporting.set(true);
    try {
      const dataUrl = await toPng(root, {
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        // Keep the action buttons out of the exported image.
        filter: (node) =>
          !(node instanceof HTMLElement && node.classList.contains('sheldon-card-buttons')),
      });

      const fileName = `${this.exportFileName()}.png`;
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], fileName, {type: 'image/png'});

      // Only offer the native share sheet on touch devices (mobile/tablet);
      // desktop always downloads the file.
      if (this.isTouchDevice() && navigator.canShare?.({files: [file]})) {
        try {
          await navigator.share({files: [file], title: fileName});
          return;
        } catch (err) {
          // User dismissed the share sheet — don't fall back to a download.
          if (err instanceof DOMException && err.name === 'AbortError') return;
        }
      }

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = fileName;
      link.click();
    } finally {
      this.exporting.set(false);
    }
  }

  /** Touch device (mobile/tablet) — uses a coarse pointer rather than a mouse. */
  private isTouchDevice(): boolean {
    return window.matchMedia?.('(pointer: coarse)').matches ?? false;
  }

  /** Slug derived from the card title, falling back to a generic name. */
  private exportFileName(): string {
    const title = this.host.nativeElement.querySelector('.sheldon-card-title')?.textContent?.trim();
    const slug = normalizzaStringa(title ?? '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return slug || 'card';
  }

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIcon('sheldon-info', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/info.svg'));
    iconRegistry.addSvgIcon('sheldon-download', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/download.svg'));
  }
}
