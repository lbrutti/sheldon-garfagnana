import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { Observable } from 'rxjs';
import { TranslationCsvService } from './services/translation-csv.service';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private csv = inject(TranslationCsvService);

  getTranslation(lang: string): Observable<Translation> {
    return this.csv.getTranslations(lang);
  }
}
