import { Component, Host, h, Prop, Element, Listen, State } from '@stencil/core';
import { FbpNode } from '../../types/node';

@Component({
  tag: 'fbp-main',
  styleUrl: 'main.scss',
  shadow: true
})
export class Main {
  @Element() host: HTMLElement;
  @Prop() nodes: FbpNode[];

  @State() private dragNode: HTMLFbpNodeElement;

  private zIndex = 1;
  private dragOffsetX = 0;
  private dragOffsetY = 0;
  private dragWidth = 0;
  private dragHeight = 0;
  private boundingRect: DOMRect;

  componentDidLoad(): void {
    this.boundingRect = this.host.getBoundingClientRect();

    this.nodes.forEach(node => {
      const el = this.host.querySelector(`#${node.id}`) as HTMLElement;
      this.setStyles(node.x, node.y, el, this.nextZIndex());
    });

  }

  @Listen('mousedown')
  onMouseDown(event): void {
    const nodes: HTMLFbpNodeElement[] = event.path.filter(n => n.nodeName === 'FBP-NODE');

    if (nodes.length) {
      this.dragNode = nodes[0]; 
      this.dragNode.activate(true);
      this.dragNode.style.zIndex = this.nextZIndex();

      const { x, y , width, height } = this.dragNode.getBoundingClientRect();

      this.dragOffsetX = event.clientX - x;
      this.dragOffsetY = event.clientY - y;
      this.dragWidth = width;
      this.dragHeight = height;
    }
  }

  @Listen('mousemove')
  onMouseMove(event: MouseEvent): void {
      if (this.dragNode) {
        this.setStyles(event.clientX, event.clientY);
      }
  }

  @Listen('mouseup')
  onMouseUp(): void {
    if (this.dragNode) {
      this.dragNode.activate(false);
      this.dragNode = null;
    }
  }

  private setStyles(x: number, y: number, node: HTMLElement = this.dragNode, zIndex?: string): void {
    console.log(this.boundingRect, this.dragOffsetY, this.dragOffsetX, x, y);
    const maxX = this.boundingRect.x + this.boundingRect.width - this.dragWidth;
    const maxY = this.boundingRect.y + this.boundingRect.height - this.dragHeight;
    let coorX = Math.min(maxX, Math.max(this.boundingRect.x, x - this.dragOffsetX));
    let coorY= Math.min(maxY, Math.max(this.boundingRect.y, y - this.dragOffsetY)); // this.boundingRect.y);  //y - this.dragOffsetY - this.boundingRect.y;

    console.log(y, coorY, maxY, this.dragOffsetY);


    node.style.left = `${coorX}px`;
    node.style.top = `${coorY}px`;
    node.style.zIndex = zIndex || (this.zIndex++).toString();
  }

  private nextZIndex(): string {
    return (this.zIndex++).toString();
  }

  render() {
    return (
      <Host class={{'is-dragging': !!this.dragNode}}>
        <slot></slot>
      </Host>
    );
  }
}
