import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-button',
  styleUrl: 'nav-button.css',
  shadow: true,
})
export class NavButton {
  render() {
    return (
      <Host>
        <button class="nav-button">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
