import { TypeKeys } from "./index";
import { IFbpNode } from '@scaljeri/fbp-shared';

export interface SetNodes {
  type: TypeKeys.SET_NODES;
  nodes: IFbpNode[];
}

export interface SetNodePosition {
  type: TypeKeys.SET_NODE_POSITION;
  nodeId: string;
  x: number;
  y: number;
}

export const setNodes = (nodes: IFbpNode[]) => (dispatch, _getState) => {
  const action: SetNodes = {
    type: TypeKeys.SET_NODES,
    nodes
  };
  dispatch(action);
};

export const setNodePosition = (nodeId: string, x: number, y: number) => (dispatch, _getState) => {
  const action: SetNodePosition = {
    type: TypeKeys.SET_NODE_POSITION,
    nodeId, x, y
  };
  dispatch(action);
};