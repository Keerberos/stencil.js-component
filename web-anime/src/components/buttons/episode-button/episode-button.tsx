import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'episode-button',
  styleUrl: 'episode-button.css',
  shadow: true,
})
export class EpisodeButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
