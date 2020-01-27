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

  @State() private isActive = false;
  @Prop() nodeId: string;
  @Prop({ context: 'store' }) store: Store;
  @State() config: IFbpState['nodes'][0];
  @State() x: number;
  @State() y: number;
  @State() zIndex: number;
  @Prop() isFullscreen = false;

  // @Element() host: HTMLElement

  @Method()
  async activate(state: boolean) {
    this.isActive = state;
  }

  componentWillLoad() {
    this.storeUnsubscribe = this.store.mapStateToProps(this, (state: IFbpState) => {
      console.log('yes');
      const config = state.nodes.filter(node => node.id === this.nodeId)[0] || {} as any;

      return {
        config,
        x: config.view.x,
        y: config.view.y,
        isFullscreen: config.view.isFullscreen,
        zIndex: state.nodes.indexOf(config)
      };
    });
  }

  componentDidUnload() {
    this.storeUnsubscribe();
  }

  @Listen('fbp.view.fullscreen')
  onFullScreen(): void {
    this.isFullscreen = true;
  }

  @Listen('fbp.view.normal')
  onNormalView(): void {
    this.isFullscreen = false
  }

  render() {
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
