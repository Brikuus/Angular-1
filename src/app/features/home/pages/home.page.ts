import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <section>
      <h2>Bienvenue au Brique's e-shop</h2>

      <p>Ici tu peux trouver tout plein d'objets</p>

    </section>
  `,
  styles: `
  section {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p{
    text-align: center;
    padding-top: 1em;
    padding-left: 1em;
  }`
})

export default class HomePage {

}
