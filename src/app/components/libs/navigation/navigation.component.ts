import {Component, computed, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {filter, map} from 'rxjs';
import {MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {normalizzaStringa, resolveColorVariable, shuffleArray} from '../../../utils';
import {ThemeService} from '../../../services/theme.service';
import HeaderComponent from '../header/header.component';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-navigation',
  imports: [
    MatTabNav,
    MatTabNavPanel,
    MatTabLink,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    TranslocoPipe,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export default class NavigationComponent {
  @Input() links: { url: string, name: string }[] = [];
  protected randomCategory = 'mobilita';

  constructor() {
    this.randomCategory = shuffleArray(['ambiente', 'sociale', 'mobilita'])[0];
  }

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  /** Current URL, kept in sync on every navigation (including direct loads/redirects). */
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    {initialValue: this.router.url},
  );

  /** Active tab derived from the URL's first path segment ('' resolves to the dashboard tab). */
  protected readonly activeLink = computed(() => {
    const path = this.url().split(/[?#]/)[0];
    return path.split('/').filter(Boolean)[0] ?? 'dashboard';
  });
  // Re-read CSS variables when the theme changes (gradients collapse to grayscale in b/w).
  private readonly theme = inject(ThemeService).theme;

  /** Currently selected categoria, mirrored from the `categoria` query param. */
  protected readonly categoria = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('categoria') ?? this.randomCategory)),
    {initialValue: new URLSearchParams(window.location.search).get('categoria') ?? shuffleArray(['ambiente', 'sociale', 'mobilita'])[0]},
  );

  /** Gradient of the selected categoria, used as the nav background (empty when none). */
  protected readonly background = computed(() => {
    this.theme();
    const categoria = this.categoria();
    if (!categoria) return '';
    const norm = normalizzaStringa(categoria);
    const start = resolveColorVariable(`--color-gradient-${norm}-start`);

    return start;
  });
}
