import {Component, computed, inject, input, OnInit} from '@angular/core';
import {Theme, ThemeService} from '../../../services/theme.service';
import {shuffleArray} from '../../../utils';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'sheldon-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export default class ThemeSwitchComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  readonly theme = this.themeService.theme;

  readonly categoria = input<string | null>(null);

  categoriaCorrente = computed<string>(() => this.categoria() ?? this.categoriaRandom);
  private categoriaRandom: string;

  protected nextOption = computed<{value: Theme; icon: string}>(() =>
    this.theme() === 'light'
      ? {value: 'system', icon: 'assets/svg/bw-theme.svg'}
      : {value: 'light', icon: 'assets/svg/light-theme.svg'},
  );

  ngOnInit(): void {
    this.themeService.init();
    this.categoriaRandom = shuffleArray(environment.categorie)[0];
  }

  protected toggle(): void {
    this.themeService.set(this.nextOption().value);
  }
}
