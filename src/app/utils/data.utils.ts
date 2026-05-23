import {DataInterface} from '../interfaces';

export function getReducedValue(data: DataInterface[], reduceBy: string) {
  switch (reduceBy) {
    case 'sum':
      return data.reduce((acc: number, d: DataInterface) => (acc + d.valore), 0);
    case 'max':
      return data.reduce((acc: number, d: DataInterface) => Math.max(acc, d.valore), -Infinity);
    case 'count':
      return data.length;
    default:
      return 0;
  }
}


export function getReducedValueByLabel(grouped: Partial<Record<any, any[]>>, label: string, reduceBy: string) {
  switch (reduceBy) {
    case 'sum':
      return grouped[label].reduce((acc: number, d: DataInterface) => (acc + d.valore), 0);
    case 'max':
      return grouped[label].reduce((acc: number, d: DataInterface) => Math.max(acc, d.valore), -Infinity);
    case 'count':
      return grouped[label].length;
    case 'countunique':
      return grouped[label].length;
    default:
      return 0;
  }
}
