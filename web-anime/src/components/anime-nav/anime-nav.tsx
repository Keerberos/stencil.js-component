import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'anime-nav',
  styleUrl: 'anime-nav.css',
  shadow: true,
  assetsDirs: ['./assets']
})
export class AnimeNav {
  logo = "logo.png";
  iconoUser = "user.png";

  @Prop({reflect:true})
  inicio: string = 'Inicio';
  @Prop({reflect:true})
  horarios: string = 'Horarios';
  @Prop({reflect:true})
  directorios: string = 'Directorios';
  @Prop({reflect:true})
  recientes: string = 'Recientes';

  render() {
    const logoSrc = getAssetPath(`./../../assets/${this.logo}`);
    console.log(logoSrc)
    const iconoSrc = getAssetPath(`**/assets/${this.iconoUser}`);
    
    return  (
      <Host>
        <nav>
          <img src={logoSrc}/>
          <nav-button>{this.inicio}</nav-button>
          <nav-button>{this.horarios}</nav-button>
          <nav-button>{this.directorios}</nav-button>
          <nav-button>{this.recientes}</nav-button>
          <input-search/>
          <img src={iconoSrc}/>
        </nav>
      </Host>
    );
  }
}
