import { Component, Host, h, State, Method } from '@stencil/core';

@Component({
  tag: 'fbp-node',
  styleUrl: 'node.scss',
  shadow: true
})
export class Node {
  @State() private isActive = false;

  // @Element() host: HTMLElement

  @Method()
  async activate(state: boolean) {
    this.isActive = state;
  }

  render() {
    // console.log(this.host);
    return (
      <Host class={{'is-draggable': this.isActive}}>
        THis is FBP-NODE
        <slot></slot>
      </Host>
    );
  }

}
