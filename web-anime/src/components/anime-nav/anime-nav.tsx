import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'anime-nav',
  styleUrl: 'anime-nav.css',
  shadow: true,
})
export class AnimeNav {


  @Prop({reflect:true})
  inicio: string = 'Inicio';
  @Prop({reflect:true})
  horarios: string = 'Horarios';
  @Prop({reflect:true})
  directorios: string = 'Directorios';
  @Prop({reflect:true})
  recientes: string = 'Recientes';

  render() {
    
    return  (
      <Host>
        <nav>
          <img src="https://i.imgur.com/ukvdUS9.png"/>
          <nav-button>{this.inicio}</nav-button>
          <nav-button>{this.horarios}</nav-button>
          <nav-button>{this.directorios}</nav-button>
          <nav-button>{this.recientes}</nav-button>
          <input-search/>
          <button >
            <img src="https://i.imgur.com/7CWnmlR.png"/>
          </button>
        </nav>
      </Host>
    );
  }
}
