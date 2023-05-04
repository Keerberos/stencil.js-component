import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'anime-button',
  styleUrl: 'nav-button.css',
  shadow: true,
})
export class AnimeButton {
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
