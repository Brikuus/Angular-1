import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <div>
      <p>
        Nos produits sont 100% fabriqués chez Brique
      </p>
    </div>

  `,
  styles: `
  div{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 5em;
  }
  `
})
export default class AboutPage {

}
