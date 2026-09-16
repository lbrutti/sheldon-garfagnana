import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {ThemeService} from '../../../services/theme.service';
import {normalizzaStringa, resolveColorVariable} from '../../../utils';

@Component({
  selector: 'sheldon-intervento',
  templateUrl: './intervento.html',
  styleUrl: './intervento.scss',
})
export default class Intervento implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly apiService = inject(ProjectsApiService);
  private readonly themeService = inject(ThemeService);
  // Track the active theme so categoriaColor re-reads its CSS variable on change.
  private readonly theme = this.themeService.theme;

  protected readonly formatter = new Intl.NumberFormat(navigator.language);

  protected interventoId = signal<string>('');

  protected intervento = computed(() =>
    this.apiService.interventi().find(i => i.id === this.interventoId())
  );

  /** Solid accent color derived from the intervento's categoria, used as the page background. */
  protected categoriaColor = computed<string>(() => {
    // Track categorie so this recomputes once the --color-gradient-* CSS variables
    // (set asynchronously by ProjectsApiService) are actually available.
    this.apiService.categorie();
    // Dark theme uses a flat grey accent instead of the (light-tuned) gradient colors.
    if (this.theme() === 'system') return '#A9A9A9';
    const categoria = this.intervento()?.categoria;
    if (!categoria) return '#A9A9A9';
    return resolveColorVariable(`--color-gradient-${normalizzaStringa(categoria)}-end`);
  });

  constructor() {
    this.route.params.subscribe(params => {
      this.interventoId.set(params['id']);
    });
  }

  ngOnInit(): void {
    // This page can be opened directly (e.g. a list link opened in a new tab), so the
    // theme must be initialized here too — it's normally only done by sheldon-theme-switch.
    this.themeService.init();
    this.apiService.getInterventi();
  }
}
