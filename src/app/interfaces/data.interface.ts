export declare interface DataInterface {
  proComT?: string,
  comune: string,
  unione?: string,
  anno?: number,
  tipoGeo?: string,
  indicatore?: string,
  valore: number,
  udm?: string,
  note?: string,
  fonte?: string,
}

export declare interface TreemapDataInterface extends DataInterface {
  gruppi?: {
    nome: string,
    valore: string | number
  }[],
}
