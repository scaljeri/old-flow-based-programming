import { Component } from '@angular/core';
import { FbpNode, FbpSocketTypes } from '@scaljeri/fbp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-site';

  data = {
    name: 'demo flow',
    nodes: [
      { 
        id: 'sfgt23',
        x: 100,
        y: 100,
        sockets: [
          { id: 'wfr2efwdv',
            type: FbpSocketTypes.IN
          },
          {
            id: '3ewfvrgw',
            type: FbpSocketTypes.OUT
          }
        ]
      } as FbpNode,
      { 
        id: 'sreger4',
        x: 300,
        y: 300,
        sockets: [
          { id: 'wfgfdfg',
            type: FbpSocketTypes.IN
          }
        ]
      }
    ],
    connections: [
      {
        from: 'wfr2efwdv',
        to: 'wfgfdfg'
      }
    ]
  }
}
