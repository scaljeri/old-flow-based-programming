import { FbpSocketTypes, FbpNode } from '@scaljeri/fbp';
export declare const fixtureFbpBasic: {
    name: string;
    nodes: (FbpNode | {
        id: string;
        x: number;
        y: number;
        sockets: {
            id: string;
            type: FbpSocketTypes;
        }[];
    })[];
    connections: {
        from: string;
        to: string;
    }[];
};
