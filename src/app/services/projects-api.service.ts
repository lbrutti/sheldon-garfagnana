import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataInterface, InterventoInterface} from '../interfaces';
import {csvToJson} from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private _interventi: WritableSignal<InterventoInterface[]> = signal<InterventoInterface[]>([]);
  private _popolazione: WritableSignal<DataInterface[]> = signal<DataInterface[]>([]);

  constructor(
    protected readonly httpClient: HttpClient,
  ) {
  }

  getPopolazione() {
    const SHEET_ID = "1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY";
    const GID = "691841134";
    const url = this.getGVizURL(SHEET_ID, GID, "SELECT * WHERE D = 'nati'");
    this.httpClient.get(url, {
      responseType:
        'text'
    }).subscribe((res: any) => {
      let data: DataInterface[] = csvToJson(res) as DataInterface[];
      this._popolazione.set(data);
    });
  }

  getAbitazioni() {
    const SHEET_ID = "1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY";
    const GID = "910652609";
    const url = this.getGVizURL(SHEET_ID, GID, "SELECT * WHERE D = 'nati'");
    this.httpClient.get(url, {
      responseType:
        'text'
    }).subscribe((res: any) => {
      let data: DataInterface[] = csvToJson(res) as DataInterface[];
      this._popolazione.set(data);
    });
  }


  getInterventi() {
    const SHEET_ID = "1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY";
    const GID = "807550168";
    const url = this.getGVizURL(SHEET_ID, GID, "SELECT *");
    this.httpClient.get(url, {
      responseType:
        'text'
    }).subscribe((res: any) => {
      let data: InterventoInterface[] = csvToJson(res) as InterventoInterface[];
      this._interventi.set(data);
    });

  }


  getGVizURL(spreadsheetId: string, sheetId: string, query: string = 'SELECT *'): string {
    return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=${sheetId}&tq=${encodeURIComponent(query)}`;

  }

  interventi = this._interventi.asReadonly();
  popolazione = this._popolazione.asReadonly();
}
