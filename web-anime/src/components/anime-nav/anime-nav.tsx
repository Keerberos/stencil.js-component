import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'anime-nav',
  styleUrl: 'anime-nav.css',
  shadow: true,
})
export class AnimeNav {

  render() {
    
    return  (
      <Host>
        <nav>
          <img src="https://i.imgur.com/ukvdUS9.png"/>
          <slot name="buttons"></slot>
        </nav>
      </Host>
    );
  }
}
