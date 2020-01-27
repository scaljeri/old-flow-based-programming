import { SetNodes, SetNodePosition } from './node';

export interface NullAction {
  type: TypeKeys.NULL;
}

// Keep this type updated with each known action
export type ActionTypes = NullAction | SetNodes | SetNodePosition;

export enum TypeKeys {
  // Won't match anything
  NULL = 'NULL',
  ERROR = 'ERROR',
  SET_NODES = 'SET_NODES',
  SET_NODE_POSITION = 'SET_NODE_POSITION'
}