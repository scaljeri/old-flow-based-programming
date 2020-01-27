import { FbpSocket } from './socket';


export interface IFbpNode {
    type: string;
    parent: string;
    id: string;
    x: number;
    y: number;
    config?: any;
    sockets?: FbpSocket[];
}

// export interface FbpNodeChild extends HTMLElement {
//     data: any;
// }