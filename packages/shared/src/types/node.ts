import { FbpSocket } from './socket';

export interface IFbpNodeView {
    x: number;
    y: number;
    isFullscreen?: boolean;
    parentId?: string;
}
export interface IFbpNode<T = any> {
    type: string;
    id: string;
    view: IFbpNodeView
    config?: T;
    sockets?: FbpSocket[];
}
