import {inject, Injectable, signal} from '@angular/core';
import {Router} from '@angular/router';

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'sheldon-theme';
const BW_CLASS = 'sheldon-theme-bw';
const QUERY_KEY = 'theme';

/**
 * Single source of truth for the active theme.
 *
 * Exposes a `theme` signal so colour-derived `computed()`s (card buttons, map
 * choropleth) can take a reactive dependency on it and re-read CSS variables
 * whenever the theme changes. Also persists the choice to localStorage and
 * mirrors it in the URL query string.
 */
@Injectable({providedIn: 'root'})
export class ThemeService {
  private readonly router = inject(Router);

  readonly theme = signal<Theme>('light');

  private initialized = false;

  /** Resolve the initial theme from URL → localStorage → default, then apply. */
  init(): void {
    if (this.initialized) return;
    this.initialized = true;
    const fromUrl = this.parse(new URLSearchParams(window.location.search).get(QUERY_KEY));
    const fromStore = this.parse(localStorage.getItem(STORAGE_KEY));
    this.set(fromUrl ?? fromStore ?? 'light');
  }

  /** Update the theme, persist it, apply it to the DOM, and reflect it in the URL. */
  set(theme: Theme): void {
    document.body.classList.add('sheldon-theme-transitioning');
    this.apply(theme);
    this.theme.set(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    this.syncUrl(theme);
    setTimeout(() => document.body.classList.remove('sheldon-theme-transitioning'), 400);
  }

  private parse(value: string | null): Theme | null {
    return value === 'light' || value === 'dark' || value === 'system' ? value : null;
  }

  private apply(theme: Theme): void {
    document.body.classList.toggle(BW_CLASS, theme === 'system');
    document.body.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  }

  private syncUrl(theme: Theme): void {
    this.router.navigate([], {
      queryParams: {[QUERY_KEY]: theme},
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}