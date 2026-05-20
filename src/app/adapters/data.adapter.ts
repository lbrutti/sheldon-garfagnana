import {DataInterface, InterventoInterface} from '../interfaces';
import {Feature, FeatureCollection} from 'geojson';
import {csv2json} from 'json-2-csv';
import camelcase from 'camelcase';

export type InterventoToDataMapping = { [key in keyof InterventoInterface]?: keyof DataInterface };
export type DataToInterventoMapping = { [key in keyof DataInterface]?: keyof InterventoInterface };

export function parseInterventiToDataCollection(
  interventi: InterventoInterface[],
  mapping: InterventoToDataMapping): DataInterface[] {
  return interventi.map(intervento => parseInterventoToData(intervento, mapping));
}

export function parseInterventoToData(
  intervento: InterventoInterface,
  mapping: InterventoToDataMapping): DataInterface {
  const interventoKeys = Object.keys(mapping);

  let data: any = {};
  interventoKeys.forEach(key => {
    data[(mapping as any)[key]] = (intervento as any)[key];
  });
  return data as DataInterface;
}


export function parseInterventiToFeatureCollection(
  interventi: InterventoInterface[]): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: interventi.map(intervento => parseInterventoToFeature(intervento))
  };
}

export function parseInterventoToFeature(
  intervento: InterventoInterface): Feature {
  return {
    type: "Feature",
    properties: {...intervento},
    id: intervento.id,
    geometry: {
      type: "Point",
      coordinates: [intervento.long, intervento.lat
      ]
    }
  };
}


export function parseDataToInterventiCollection(
  data: DataInterface[], mapping: DataToInterventoMapping): InterventoInterface[] {
  return data.map(d => parseDataToIntervento(d, mapping));
}

export function parseDataToIntervento(
  data: DataInterface,
  mapping: DataToInterventoMapping): InterventoInterface {
  const dataKeys = Object.keys(mapping);
  let intervento: any = {};

  dataKeys.forEach(key => {
    intervento[(mapping as any)[key]] = (data as any)[key];
  });
  return intervento as InterventoInterface;
}

export function csvToJson(csv: any): any {
  return csv2json(csv, {
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
}
