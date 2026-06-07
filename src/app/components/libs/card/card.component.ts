import {Component, computed, ElementRef, inject, input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs';
import {MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {toPng} from 'html-to-image';
import {normalizzaStringa, resolveColorVariable} from '../../../utils';
import {ThemeService} from '../../../services/theme.service';
import {TranslocoModule, TranslocoService} from '@jsverse/transloco';

/** Query-string key holding the id of the card to display fullscreen. */
const CARD_PARAM = 'card';

@Component({
  selector: 'sheldon-card',
  imports: [
    MatIcon,
    MatIconButton,
    TranslocoModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    '[class.fullscreen]': 'isFullscreen()',
  },
})
export default class CardComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  // Track the active theme so the colours below re-read their CSS variables on change.
  private readonly theme = inject(ThemeService).theme;
  private readonly transloco = inject(TranslocoService);
  showButtons = input<boolean>(true);
  categoria = input<string>('ambiente');
  /** Text shown in the info overlay opened by the info button. */
  infoText = input<string>('');
  /** Stable id used to build and resolve the fullscreen share link. */
  cardId = input<string>('');

  /** The `?card=` id currently in the URL (preseeded so a deep link is fullscreen on first paint). */
  private readonly activeCard = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get(CARD_PARAM))),
    {initialValue: new URLSearchParams(window.location.search).get(CARD_PARAM)},
  );

  /** True when this card is the target of the `?card=` deep link. */
  readonly isFullscreen = computed(() => !!this.cardId() && this.activeCard() === this.cardId());
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

  /** Briefly true after the share link is copied to the clipboard. */
  readonly linkCopied = signal(false);
  private copiedTimer: ReturnType<typeof setTimeout> | null = null;

  /**
   * Build a deep link that reopens this card fullscreen. On touch devices the
   * native share sheet is offered; on desktop the link is copied to the clipboard.
   */
  async shareCard(): Promise<void> {
    const url = this.buildShareUrl();
    const title = this.cardTitle();

    if (this.isTouchDevice() && navigator.canShare?.({url})) {
      try {
        await navigator.share({title, url});
        return;
      } catch (err) {
        // User dismissed the share sheet — don't fall back to copying.
        if (err instanceof DOMException && err.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      this.flagCopied();
    } catch {
      // Clipboard blocked (e.g. insecure context) — surface the link directly.
      window.prompt(this.transloco.translate('card.copyPrompt'), url);
    }
  }

  /** Leave fullscreen by dropping the `?card=` param while keeping all the others. */
  exitFullscreen(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {[CARD_PARAM]: null},
      queryParamsHandling: 'merge',
    });
  }

  /** Current URL with the `?card=` param set to this card, preserving every other param. */
  private buildShareUrl(): string {
    const url = new URL(window.location.href);
    if (this.cardId()) url.searchParams.set(CARD_PARAM, this.cardId());
    return url.toString();
  }

  private cardTitle(): string {
    return (
      this.host.nativeElement.querySelector('.sheldon-card-title')?.textContent?.trim() ||
      'Sheldon Garfagnana'
    );
  }

  private flagCopied(): void {
    this.linkCopied.set(true);
    if (this.copiedTimer) clearTimeout(this.copiedTimer);
    this.copiedTimer = setTimeout(() => this.linkCopied.set(false), 2000);
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
    iconRegistry.addSvgIcon('sheldon-share', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/share.svg'));
  }
}
