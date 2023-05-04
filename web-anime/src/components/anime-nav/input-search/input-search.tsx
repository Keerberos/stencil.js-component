import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'input-search',
  styleUrl: 'input-search.css',
  shadow: true,
})
export class InputSearch {
  render() {
    return (
      <Host>
        <form>
          <input type="search" placeholder="Buscar anime..." value="" required>
          </input>
            <button type="search">
              <span>Buscar</span>
            </button>
        </form>
      </Host>
    );
  }
}
