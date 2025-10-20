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
    justify-content: space-between;
    padding: 2em;
    width: 100%;
  }`
})
export default class SettingPage {
  private route = inject(ActivatedRoute);
  message = this.route.snapshot.data['message'];
}
