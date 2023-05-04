import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'anime-synopsis',
  styleUrl: 'anime-synopsis.css',
  shadow: true,
})
export class AnimeSynopsis {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
