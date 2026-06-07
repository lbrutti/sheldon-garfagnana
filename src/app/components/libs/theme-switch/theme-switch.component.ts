import {Component, computed, inject, input, OnInit} from '@angular/core';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {Theme, ThemeService} from '../../../services/theme.service';
import {shuffleArray} from '../../../utils';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'sheldon-theme-switch',
  standalone: true,
  imports: [MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export default class ThemeSwitchComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  readonly options: { value: Theme; icon: string }[] = [
    {value: 'light', icon: 'assets/svg/light-theme.svg'},
    {value: 'system', icon: 'assets/svg/bw-theme.svg'},
  ];

  readonly theme = this.themeService.theme;

  /** Selected categoria slug; drives the checked toggle's gradient-start background. */
  readonly categoria = input<string | null>(null);

  categoriaCorrente = computed<string>(() => this.categoria() ?? this.categoriaRandom)
  private categoriaRandom: string;

  ngOnInit(): void {
    this.themeService.init();
    this.categoriaRandom = shuffleArray(environment.categorie)[0];
  }

  onChange(event: MatButtonToggleChange): void {
    this.themeService.set(event.value as Theme);
  }
}
