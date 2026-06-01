import {DataInterface} from './data.interface';

export default interface ReduceByDeclaration {
  campo: keyof DataInterface | string;
  reduceBy: string
}
