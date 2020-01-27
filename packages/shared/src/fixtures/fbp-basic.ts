import { FbpSocketTypes } from '../types/socket';
import { IFbpNode } from '../types/node';

export const fixtureFbpBasic = {
    name: 'demo flow',
    nodes: [
        {
            id: 'sfgt23',
            x: 0,
            y: 0,
            sockets: [
                { id: 'wfr2efwdv', type: FbpSocketTypes.IN },
                {
                    id: '3ewfvrgw',
                    type: FbpSocketTypes.OUT
                }
            ]
        },
        {
            id: 'sreger4',
            x: 30,
            y: 30,
            sockets: [{ id: 'wfgfdfg', type: FbpSocketTypes.IN }]
        }
    ] as IFbpNode[],
    connections: [
        {
            from: 'wfr2efwdv',
            to: 'wfgfdfg'
        }
    ]
};
