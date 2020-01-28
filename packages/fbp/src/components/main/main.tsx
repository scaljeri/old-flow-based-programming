import { Component, Host, h, Prop, Element, Listen, Watch, State } from '@stencil/core';
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
  @State() dragState: dragNDrop.IDragAndDrop; 
  setNodePosition: typeof setNodePosition;
  @Element() host: HTMLElement;
  @Prop() nodes: IFbpNode[];
  @Prop({ context: 'store' }) store: Store;

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
  onMouseUp(event: PointerEvent) {
    if (this.dragState && this.dragState.isDragged) {
      const isFullscreen = this.dragState.node.isFullscreen;

      if (!isFullscreen) {
        console.log('ooops');
        const { x, y } = dragNDrop.end(this.dragState, event);
        console.log('PPPPPPPP',x,y);
        this.setNodePosition(this.dragState.node.nodeId, x, y);
      }
    }

    this.dragState = null;
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
      <Host class={{'is-dragging': !!this.dragState}}>
        <slot></slot>
      </Host>
    );
  }
}
