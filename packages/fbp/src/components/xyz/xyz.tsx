import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fbp-xyz',
  styleUrl: 'xyz.css',
  shadow: true
})
export class Xyz {

  render() {
    return (
      <Host>
        This is a FBP test component (fbp-xyz)
      </Host>
    );
  }

}
