export interface IFbpNodeData {
    id: string;
}

export interface IFbpState {
    nodes: IFbpNodeData;
}

//   export interface IFbpState {
//     nodes: {
//         [id: string]: {
//             element: HTMLFbpNodeElement,
//             data: IFbpNodeData
//         }
//     }
//   }