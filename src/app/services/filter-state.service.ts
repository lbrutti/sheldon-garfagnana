import {Injectable, signal} from '@angular/core';

/**
 * Bumped whenever the page-level global filters (unione/comune/categoria) change.
 * Components can take a reactive dependency on `version` to react to any global
 * filter change without the page having to pass the filters down explicitly.
 */
@Injectable({providedIn: 'root'})
export class FilterStateService {
  private readonly _version = signal(0);
  readonly version = this._version.asReadonly();

  notifyChanged(): void {
    this._version.update(v => v + 1);
  }
}
