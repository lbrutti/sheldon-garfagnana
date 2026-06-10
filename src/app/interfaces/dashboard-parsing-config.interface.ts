export interface StandardDatasetConfig {
  key: string;
  type: 'standard';
  explodeOn?: string;
  mapping: Record<string, string>;
}

export interface TreemapDatasetConfig {
  key: string;
  type: 'treemap';
  explodeOn: string;
  mapping: Record<string, string | string[]>;
}

export interface UniqueComuniConfig {
  key: string;
  type: 'uniqueComuni';
}

export interface RandomByUnionConfig {
  key: string;
  type: 'randomByUnion';
  unioneFilter: string;
}

export interface MapMergeConfig {
  key: string;
  type: 'mapMerge';
  explodeOn: string;
  groupByField: string;
}

export type DatasetConfig =
  | StandardDatasetConfig
  | TreemapDatasetConfig
  | UniqueComuniConfig
  | RandomByUnionConfig
  | MapMergeConfig;

export interface DashboardParsingConfig {
  datasets: DatasetConfig[];
}
