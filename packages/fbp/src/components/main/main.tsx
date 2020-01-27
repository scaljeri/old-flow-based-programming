import { Component, Host, h, Prop, Element, Listen, State, Watch } from '@stencil/core';
import { Store, Unsubscribe } from '@stencil/redux';
import "@stencil/redux";


import { IFbpNode } from '@scaljeri/fbp-shared';
import { configureStore } from '../../store';
import { setNodePosition } from '../../store/actions/node';
import * as dragNDrop from '../../utils/drag-drop';
@Component({
  tag: 'fbp-main',
  styleUrl: 'main.scss',
  shadow: true
})
export class Main {
  private storeUnsubscribe: Unsubscribe;
  private dragState: dragNDrop.IDragAndDrop; 
  setNodePosition: typeof setNodePosition;
  @Element() host: HTMLElement;
  @Prop() nodes: IFbpNode[];
  @Prop({ context: 'store' }) store: Store;

  @State() private dragNode: HTMLFbpNodeElement;

  @Listen('mousedown')
  onMouseDown(event): void {
    this.dragState = dragNDrop.start(event, this.host);
  }

  @Listen('mousemove')
  onMouseMove(event: PointerEvent): void {
    if (this.dragState) {
      dragNDrop.move(this.dragState, event);
    }
  }

  @Listen('mouseup')
  onMouseUp(event: PointerEvent): void {
    if (this.dragState) {
      const { x, y } = dragNDrop.end(this.dragState, event);
      this.setNodePosition(this.dragState.node.nodeId, x, y);
      this.dragState = null;
    }
  }

  @Watch('nodes')
  onNodesChange(): void {
    this.componentWillLoad();
  }
  
  componentWillLoad():  void {
    this.store.mapDispatchToProps(this, { setNodePosition });
    this.store.setStore(configureStore({ nodes: this.nodes }));
  }

  componentDidUnload() {
    this.storeUnsubscribe();
  }

  render() {
    return (
      <Host class={{'is-dragging': !!this.dragNode}}>
        <slot></slot>
      </Host>
    );
  }
}
