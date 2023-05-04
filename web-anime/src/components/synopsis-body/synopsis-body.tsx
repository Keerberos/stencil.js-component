import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'synopsis-body',
  styleUrl: 'synopsis-body.css',
  shadow: true,
})
export class SynopsisBody {

  render() {
    return (
      <Host>
        <div>
          <div>
            <h1></h1>
            <img/>
          </div>

          <div>
            <p></p>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </Host>
    );
  }

}
