import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation } from '@jsverse/transloco';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslationCsvService {
  private http = inject(HttpClient);

  getTranslations(lang: string) {
    const url = new URL(environment.i18n.translationCsvUrl, document.baseURI).href;
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(csv => this.flatToNested(this.parseCsv(csv, lang)))
    );
  }

  private parseCsv(csv: string, lang: string): Record<string, string> {
    const flat: Record<string, string> = {};
    const lines = csv.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    if (lines.length < 2) return flat;

    const headers = this.parseLine(lines[0]);
    const keyIdx = headers.indexOf('key');
    const valIdx = headers.indexOf(lang);
    if (keyIdx === -1 || valIdx === -1) return flat;

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const fields = this.parseLine(lines[i]);
      const key = fields[keyIdx]?.trim();
      if (key) flat[key] = fields[valIdx]?.trim() ?? '';
    }
    return flat;
  }

  private parseLine(line: string): string[] {
    const fields: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQuotes) {
        if (ch === '"' && line[i + 1] === '"') {
          current += '"';
          i++;
        } else if (ch === '"') {
          inQuotes = false;
        } else {
          current += ch;
        }
      } else if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        fields.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
    fields.push(current);
    return fields;
  }

  private flatToNested(flat: Record<string, string>): Translation {
    const result: Translation = {};
    for (const [key, value] of Object.entries(flat)) {
      const parts = key.split('.');
      let node: any = result;
      for (let i = 0; i < parts.length - 1; i++) {
        if (typeof node[parts[i]] !== 'object') node[parts[i]] = {};
        node = node[parts[i]];
      }
      node[parts[parts.length - 1]] = value;
    }
    return result;
  }
}
