import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    // Resolve relative to the app's <base href> so it works under a custom
    // base path (e.g. GitHub Pages at /sheldon-garfagnana/).
    const url = new URL(`i18n/${lang}.json`, document.baseURI).href;
    return this.http.get<Translation>(url);
  }
}
