import {Component, computed, effect, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {filter, map} from 'rxjs';
import {MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {normalizzaStringa, resolveColorVariable, shuffleArray} from '../../../utils';
import {ThemeService} from '../../../services/theme.service';
import HeaderComponent from '../header/header.component';
import {TranslocoPipe} from '@jsverse/transloco';
import {ProjectsApiService} from '../../../services/projects-api.service';

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

  private readonly apiService = inject(ProjectsApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly theme = inject(ThemeService).theme;

  private readonly _randomCategory = signal<string>('');

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

  private readonly _queryParam = toSignal(
    this.route.queryParamMap.pipe(map(params => params.get('categoria'))),
    {initialValue: new URLSearchParams(window.location.search).get('categoria')},
  );

  /** Currently selected categoria, mirrored from the `categoria` query param. */
  protected readonly categoria = computed(() => this._queryParam() ?? this._randomCategory());

  /** Gradient of the selected categoria, used as the nav background (empty when none). */
  protected readonly background = computed(() => {
    this.theme();
    this.apiService.categorie(); // recompute when CSS vars are populated
    const categoria = this.categoria();
    if (!categoria) return '';
    const norm = normalizzaStringa(categoria);
    return resolveColorVariable(`--color-gradient-${norm}-start`);
  });

  constructor() {
    effect(() => {
      const cats = this.apiService.categorie();
      if (!cats.length || this._randomCategory()) return;
      this._randomCategory.set(shuffleArray(cats)[0].nome);
    });
  }
}
