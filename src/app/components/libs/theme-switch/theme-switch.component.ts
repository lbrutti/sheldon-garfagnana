import {Component, OnInit, signal} from '@angular/core';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'sheldon-theme';

const BW_CLASS = 'sheldon-theme-bw';

@Component({
  selector: 'sheldon-theme-switch',
  standalone: true,
  imports: [MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export class ThemeSwitchComponent implements OnInit {
  readonly options: {value: Theme; icon: string}[] = [
    {value: 'light', icon: 'assets/svg/light-theme.svg'},
    {value: 'dark', icon: 'assets/svg/dark-theme.svg'},
    {value: 'system', icon: 'assets/svg/bw-theme.svg'},
  ];

  theme = signal<Theme>('light');

  ngOnInit(): void {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = stored ?? 'light';
    this.theme.set(initial);
    this.apply(initial);
  }

  onChange(event: MatButtonToggleChange): void {
    const t = event.value as Theme;
    this.theme.set(t);
    localStorage.setItem(STORAGE_KEY, t);
    this.apply(t);
  }

  private apply(t: Theme): void {
    document.body.classList.toggle(BW_CLASS, t === 'system');
    document.body.style.colorScheme = t === 'dark' ? 'dark' : 'light';
  }
}
