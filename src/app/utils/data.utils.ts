import {DataInterface} from '../interfaces';

export function getReducedValue(data: DataInterface[], reduceBy: string, campo: string = 'valore') {
  switch (reduceBy) {
    case 'sum':
      return data.reduce((acc: number, d: DataInterface) => (acc + (d as any)[campo]), 0);
    case 'max':
      return data.reduce((acc: number, d: DataInterface) => Math.max(acc, (d as any)[campo]), -Infinity);
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

export function shuffleArray(array: any[]): any[] {
  const randomArray = JSON.parse(JSON.stringify(array));
  let currentIndex = randomArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [randomArray[currentIndex], randomArray[randomIndex]] = [
      randomArray[randomIndex], randomArray[currentIndex]];
  }
  return randomArray;
}
