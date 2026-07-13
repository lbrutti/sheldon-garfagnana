import {Component, computed, effect, inject, input, OnInit, signal} from '@angular/core';
import {Theme, ThemeService} from '../../../services/theme.service';
import {normalizzaStringa, shuffleArray} from '../../../utils';
import {ProjectsApiService} from '../../../services/projects-api.service';

@Component({
  selector: 'sheldon-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export default class ThemeSwitchComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly apiService = inject(ProjectsApiService);

  readonly theme = this.themeService.theme;
  readonly categoria = input<string | null>(null);

  private readonly _categoriaRandom = signal<string>('');

  categoriaCorrente = computed<string>(() => this.categoria() ?? this._categoriaRandom());

  protected nextOption = computed<{value: Theme; icon: string}>(() =>
    this.theme() === 'light'
      ? {value: 'system', icon: 'assets/svg/bw-theme.svg'}
      : {value: 'light', icon: 'assets/svg/light-theme.svg'},
  );

  constructor() {
    effect(() => {
      const cats = this.apiService.categorie();
      if (!cats.length || this._categoriaRandom()) return;
      this._categoriaRandom.set(normalizzaStringa(shuffleArray(cats)[0].nome));
    });
  }

  ngOnInit(): void {
    this.themeService.init();
  }

  protected toggle(): void {
    this.themeService.set(this.nextOption().value);
  }
}
