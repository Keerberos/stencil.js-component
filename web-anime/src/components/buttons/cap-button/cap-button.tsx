import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cap-button',
  styleUrl: 'cap-button.css',
  shadow: true,
})
export class CapButton {
  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
