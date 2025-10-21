import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-setting',
  imports: [
    RouterLink
  ],
  template: `
    <div>
      <a routerLink="/hello">Dire bonjour</a>
      <a routerLink="/goodbye">Dire aurevoir</a>
    </div>

    <p>La valeur du message est : {{ message }}</p>
  `,
  styles: `
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2em;

    width: 96.8%;
    flex-wrap: wrap;
  }`
})
export default class SettingPage {
  private route = inject(ActivatedRoute);
  message = this.route.snapshot.data['message'];
}
