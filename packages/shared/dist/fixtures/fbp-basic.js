"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fbp_1 = require("@scaljeri/fbp");
exports.fixtureFbpBasic = {
    name: 'demo flow',
    nodes: [
        {
            id: 'sfgt23',
            x: 100,
            y: 100,
            sockets: [
                { id: 'wfr2efwdv', type: fbp_1.FbpSocketTypes.IN },
                {
                    id: '3ewfvrgw',
                    type: fbp_1.FbpSocketTypes.OUT
                }
            ]
        },
        {
            id: 'sreger4',
            x: 300,
            y: 300,
            sockets: [{ id: 'wfgfdfg', type: fbp_1.FbpSocketTypes.IN }]
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