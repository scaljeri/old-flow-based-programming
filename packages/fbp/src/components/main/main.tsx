import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fbp-main',
  styleUrl: 'main.scss',
  shadow: true
})
export class Main {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
