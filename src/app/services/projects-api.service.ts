import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataInterface, InterventoInterface} from '../interfaces';
import {csv2json} from 'json-2-csv';
import camelcase from 'camelcase';
import {isString} from 'json-2-csv/lib/utils';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private _progetti: WritableSignal<InterventoInterface[]> = signal<InterventoInterface[]>([]);
  private _popolazione: WritableSignal<DataInterface[]> = signal<DataInterface[]>([]);

  constructor(protected readonly httpClient: HttpClient) {
  }

  getProjects() {
    this.httpClient.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRqq7_zuR9_9GErHwlqNiLzy8WCJD6EKBnT_cRHaj3WA0Cy9MKbBKkX3ieci4awARU3qoXkowJW2-vF/pub?gid=807550168&single=true&output=csv', {
      responseType:
        'text'
    }).subscribe((res: any) => {
      let data = csv2json(res, {
        trimHeaderFields: true,
        trimFieldValues: false,
      });
      const interventi: InterventoInterface[] = data.map((d: any) => {
        const keys = Object.keys(d);
        const parsed: any = {};
        keys.forEach((key: string) => {
          parsed[camelcase(key)] = isString(d[key]) ? d[key].trim() : d[key];
        })
        return parsed;
      })

      this._progetti.set(interventi);
    });

  }

  getPopolazione() {
    const SHEET_ID = "1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY";
    const GID = "691841134";
    const vizUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${GID}&tq=SELECT * WHERE D = \'nati\'`;
    this.httpClient.get(vizUrl, {
      responseType:
        'text'
    }).subscribe((res: any) => {

      let data: DataInterface[] = csv2json(res, {
        trimHeaderFields: true,
        trimFieldValues: true,
      }).map((d: any) => {
        const keys = Object.keys(d);
        const parsed: any = {};
        keys.forEach((key: string) => {
          parsed[camelcase(key)] = d[key];
        })
        return parsed;
      })
      console.log(data);
      this._popolazione.set(data);
    });

  }


  progetti = this._progetti.asReadonly();
  popolazione = this._popolazione.asReadonly();
}
