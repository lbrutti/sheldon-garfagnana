import {Injectable} from '@angular/core';

const STORAGE_KEY_PREFIX = 'sheldon-welcome-popup-dismissed-at';
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000;

/**
 * Tracks whether a page's welcome popup has been dismissed within the last 24h,
 * so it does not reappear on every reload. Each page has its own independent flag,
 * keyed by `page`.
 */
@Injectable({providedIn: 'root'})
export class WelcomePopupService {

  shouldShow(page: string): boolean {
    const dismissedAt = Number(localStorage.getItem(`${STORAGE_KEY_PREFIX}-${page}`));
    return !dismissedAt || Date.now() - dismissedAt > DISMISS_DURATION_MS;
  }

  dismiss(page: string): void {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}-${page}`, String(Date.now()));
  }
}
