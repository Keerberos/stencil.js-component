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
          <nav-button>Inicio</nav-button>
          <nav-button>Horarios</nav-button>
          <nav-button>Directorio</nav-button>
          <nav-button>Recientes</nav-button>
          <input-search/>
          <img src="" alt="" id=""/>
        </nav>
      </Host>
    );
  }
}
