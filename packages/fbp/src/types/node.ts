import { FbpSocket } from './socket';


export interface FbpNode {
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