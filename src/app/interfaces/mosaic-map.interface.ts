export type ReduceMode = 'sum' | 'max' | 'count' | 'countunique';

export interface AuxReduceOption {
  campo: string;
  reduceBy: ReduceMode;
}

export interface ColorStop {
  value: number; // normalized 0-100
  color: string;
}
