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
        <div class="container">
          <button>
            <span>
              <slot></slot>
            </span>
          </button>
        </div>
      </Host>
    );
  }
}
