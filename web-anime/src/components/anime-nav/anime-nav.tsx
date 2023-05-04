import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'anime-nav',
  styleUrl: 'anime-nav.css',
  shadow: true,
})
export class AnimeNav {
  render() {
    return (
      <Host>
        <nav>
          <img src="" alt="" />
          <anime-button>Inicio</anime-button>
          <anime-button>Horarios</anime-button>
          <anime-button>Directorio</anime-button>
          <anime-button>Recientes</anime-button>
          <input type='text'/>
          <img src="" alt="" id=""/>
        </nav>
      </Host>
    );
  }
}
