import { Component, Host, h, State, Method, Prop, Listen } from '@stencil/core';
import { Store, Unsubscribe } from '@stencil/redux';

import { IFbpState } from '../../types/state';
@Component({
  tag: 'fbp-node',
  styleUrl: 'node.scss',
  shadow: true
})
export class Node {
  private storeUnsubscribe: Unsubscribe;

  @Prop() nodeId: string;
  @Prop({ context: 'store' }) store: Store;
  @State() isActive = false;
  @State() config: IFbpState['nodes'][0];
  @State() x: number;
  @State() y: number;
  @State() zIndex: number;
  @State() isFullscreen: boolean;

  // @Element() host: HTMLElement

  @Method()
  async isDraggable(): Promise<boolean> {
    return !this.isFullscreen;
  }

  @Method()
  async activate(state: boolean) {
    this.isActive = state;
  }

  componentWillLoad() {
    this.storeUnsubscribe = this.store.mapStateToProps(this, (state: IFbpState) => {
      const config = state.nodes.filter(node => node.id === this.nodeId)[0] || {} as any;

      console.log('store ' + this.isFullscreen);
      return {
        config,
        x: config.view.x,
        y: config.view.y,
        isFullscreen: this.isFullscreen === undefined ? config.view.isFullscreen : this.isFullscreen,
        zIndex: state.nodes.indexOf(config)
      };
    });
  }

  componentDidUnload() {
    this.storeUnsubscribe();
  }

  @Listen('fbp.view.fullscreen')
  onFullScreen(): void {
    console.log('set fs to '  + !this.isFullscreen);
    this.isFullscreen = !this.isFullscreen;
  }

  @Listen('fbp.view.normal')
  onNormalView(): void {
    this.isFullscreen = false
  }

  render() {
    console.log('render ' + this.isFullscreen);
    return (
      <Host class={{
        'is-draggable': this.isActive,
        'is-fullscreen': this.isFullscreen
      }} style={{
          left: this.x + '%',
          top: this.y + '%',
          zIndex: '' + this.zIndex
      }}>
        <slot></slot>
      </Host>
    );
  }
}
