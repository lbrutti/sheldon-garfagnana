import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataInterface, InterventoInterface} from '../interfaces';
import {csvToJson} from '../adapters';
import {FeatureCollection, Point, Polygon} from 'geojson';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private _interventi: WritableSignal<InterventoInterface[]> = signal<InterventoInterface[]>([]);
  private _popolazione: WritableSignal<DataInterface[]> = signal<DataInterface[]>([]);
  private _comuniPoints: WritableSignal<FeatureCollection<Point>> = signal<FeatureCollection<Point>>({
    type: 'FeatureCollection',
    features: []
  });
  private _comuniPolygons: WritableSignal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: 'FeatureCollection',
    features: []
  });

  constructor(
    protected readonly httpClient: HttpClient,
  ) {
  }

  getPopolazione() {
    const url = this.getGVizURL(environment.sheets.spreadsheetId, environment.sheets.popolazioneGid, "SELECT * WHERE D = 'nati'");
    this.httpClient.get(url, {
      responseType:
        'text'
    }).subscribe((res: any) => {
      let data: DataInterface[] = csvToJson(res) as DataInterface[];
      this._popolazione.set(data);
    });
  }

  getInterventi() {
    const url = this.getGVizURL(environment.sheets.spreadsheetId, environment.sheets.interventiGid, "SELECT *");
    this.httpClient.get(url, {
      responseType:
        'text'
    }).subscribe((res: any) => {
      let data: InterventoInterface[] = csvToJson(res) as InterventoInterface[];
      this._interventi.set(data);
    });

  }

  getComuniPoints() {
    this.httpClient.get(environment.data.comuniPoints, {
      responseType:
        'json'
    }).subscribe((res: any): void => {
      console.log(res);
      this._comuniPoints.set(res as FeatureCollection<Point>);

    });
  }

  getComuniPolygons() {
    this.httpClient.get(environment.data.comuniPolygons, {
      responseType:
        'json'
    }).subscribe((res: any): void => {
      this._comuniPolygons.set(res as FeatureCollection<Polygon>);

    });
  }

  getGVizURL(spreadsheetId: string, sheetId: string, query: string = 'SELECT *'): string {
    return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=${sheetId}&tq=${encodeURIComponent(query)}`;

  }

  interventi = this._interventi.asReadonly();
  popolazione = this._popolazione.asReadonly();
  comuniPolygons = this._comuniPolygons.asReadonly();
  comuniPoints = this._comuniPoints.asReadonly();
}
