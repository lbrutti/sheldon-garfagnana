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
  const data = grouped[label] ?? [];
  switch (reduceBy) {
    case 'sum':
      return data.reduce((acc: number, d: DataInterface) => (acc + d.valore), 0);
    case 'max':
      return data.reduce((acc: number, d: DataInterface) => Math.max(acc, d.valore), -Infinity);
    case 'count':
    case 'countunique':
      return data.length;
    default:
      return 0;
  }
}


export function getExplodedData(data: any, explodeBy: string): any {
  return data.flatMap((d: any) => {
    return d[explodeBy].split('|').map((f: any) => ({...d, [explodeBy]: f.trim()}));
  });
}
