import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "fbp-demo",
  styleUrl: "demo.scss",
  shadow: true
})
export class Demo {
  private fbp: HTMLFbpMainElement;

  private data = {
    name: "demo flow",
    nodes: [
      {
        id: "sfgt23",
        x: 0,
        y: 0,
        sockets: [
          { id: "wfr2efwdv", type: 0},
          {
            id: "3ewfvrgw",
            type: 1
          }
        ]
      },
      {
        id: "sreger4",
        x: 30,
        y: 30,
        sockets: [{ id: "wfgfdfg", type: 0 }]
      }
    ],
    connections: [
      {
        from: "wfr2efwdv",
        to: "wfgfdfg"
      }
    ]
  }; // = fixtureFbpBasic;

  componentDidLoad(): void {
    this.fbp.nodes = this.data.nodes as any; 
    console.log(this.fbp);
  }

  render() {
    return (
      <Host>
        <fbp-main ref={el => (this.fbp = el)}>
          {this.data.nodes.map(node => (
            <fbp-node nodeId={node.id}>Yes {node.id}</fbp-node>
          ))}
        </fbp-main>
      </Host>
    );
  }
}
