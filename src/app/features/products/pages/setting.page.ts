import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-setting',
  imports: [
    RouterLink
  ],
  template: `
    <a routerLink="/hello">Dire bonjour</a>
    <p>La valeur du message est : {{ message }}</p>
  `,
  styles: ``
})
export default class SettingPage {
  private route = inject(ActivatedRoute);
  message = this.route.snapshot.data['message'];
}
