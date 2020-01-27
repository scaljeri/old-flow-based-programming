import { TypeKeys, ActionTypes } from '../actions';
import { SetNodes, SetNodePosition } from '../actions/node';
import { IFbpNode } from '@scaljeri/fbp-shared';

const getInitialState = (): IFbpNode[] => {
  return [];
}
  
const nodes = (
    state = getInitialState(),
    action: ActionTypes /*for now...*/
  ): IFbpNode[] => {
    switch (action.type) {
      case TypeKeys.SET_NODES: {
        return [...(action as SetNodes).nodes];
      }
      case TypeKeys.SET_NODE_POSITION: {
        console.log('update pos');
        const tAction = action as SetNodePosition; 
        const node: IFbpNode = state.filter(node => node.id === tAction.nodeId)[0];
        const newState = [ ...state ];
        newState.splice(state.indexOf(node), 1);
        newState.push({ ...node, 
          view: {
          x: action.x,
          y: action.y}});

          return newState;
      }
    }

    return state;
  };
  
  export default nodes;
