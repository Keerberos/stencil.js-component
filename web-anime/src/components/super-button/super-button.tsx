import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'super-button',
  styleUrl: 'super-button.css',
  shadow: true,
})
export class SuperButton {

  render() {
    return (
      <Host>
        <button>
          <span>super botón</span>
        </button>
      </Host>
    );
  }

}
