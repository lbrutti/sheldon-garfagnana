import ReduceByDeclaration from './reduce-by-declaration.interface';

export default interface WidgetSetting {
  id: string;
  tag: string,
  title: string,
  filterBy?: string | null,
  masterField?: string,
  groupBy?: string,
  //groups è usato per i treemap
  groups?: string[],
  reduceBy?: string,
  sortBy?: 'category' | 'value',
  defaultSortDirection?: 'asc' | 'desc',
  showSorting?: boolean,
  limit?: number,
  //per kpi con font scale
  minFontSize?: number,
  udm?: string,
  //treemap
  campo?: string,
  auxReduce?: ReduceByDeclaration[],
  //indica il signal da pasare nell'input [data] del component
  data: string,
  //larghezza tile
  tileWidth: number,

  //per applicare conversioni
  morphFrom?: string,
  morphTo?: string,

  // mosaic-map specific
  municipalityKey?: string,
  tooltipProperties?: { property: string; label: string; }[];

  //descrizione card
  desc?: string,
  url?: string,
}
