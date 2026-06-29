import {csvToJson} from './data.adapter';
import DataStoryInterface from '../interfaces/data-story.interface';

const JSON_FIELDS = new Set([]);
const NUMBER_FIELDS = new Set([]);
const BOOLEAN_FIELDS = new Set([]);
const PIPE_FIELDS = new Set(['fonti']);

export function parseDataStoryCsv(csv: string): DataStoryInterface[] {
  let rows: any[] = csvToJson(csv);
  rows = rows
    //.filter(row => !!row['id'])
    .map(row => {
      const entry: any = {};
      for (const [k, v] of Object.entries(row)) {
        //  if (v === '' || v === null || v === undefined) continue;
        if (JSON_FIELDS.has(k)) {
          try {
            entry[k] = JSON.parse(v as string);
          } catch {
            entry[k] = v;
          }
        } else if (NUMBER_FIELDS.has(k)) {
          entry[k] = Number(v);
        } else if (BOOLEAN_FIELDS.has(k)) {
          entry[k] = (v as string).toLowerCase() === 'true';
        } else if (PIPE_FIELDS.has(k)) {
          entry[k] = (v as string).split('|');
        } else {
          entry[k] = v;
        }
      }
      return entry as DataStoryInterface;
    });
  return rows;
}
