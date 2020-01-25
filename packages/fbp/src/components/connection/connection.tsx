import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fbp-connection',
  styleUrl: 'connection.scss',
  shadow: true
})
export class Connection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
