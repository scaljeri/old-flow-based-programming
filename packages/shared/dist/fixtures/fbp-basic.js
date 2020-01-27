"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("../types/socket");
exports.fixtureFbpBasic = {
    name: 'demo flow',
    nodes: [
        {
            id: 'sfgt23',
            type: 'random-number-generator',
            view: {
                x: 0,
                y: 0
            },
            sockets: [
                { id: 'wfr2efwdv', type: socket_1.FbpSocketTypes.IN },
                {
                    id: '3ewfvrgw',
                    type: socket_1.FbpSocketTypes.OUT
                }
            ]
        },
        {
            id: 'sreger4',
            type: 'logger',
            view: {
                x: 30,
                y: 30
            },
            sockets: [{ id: 'wfgfdfg', type: socket_1.FbpSocketTypes.IN }]
        }
    ],
    connections: [
        {
            from: 'wfr2efwdv',
            to: 'wfgfdfg'
        }
    ]
};
//# sourceMappingURL=fbp-basic.js.map