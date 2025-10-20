import { Component } from '@angular/core';
import {Counter} from '../components/counter/counter';
import {Temperature} from '../components/temperature/temperature';
import {LikeCounter} from '../components/like-counter/like-counter';

@Component({
  selector: 'app-poubelle',
  imports: [
    Counter,
    Temperature,
    LikeCounter
  ],
  template: `
    <app-counter></app-counter>

    <app-temperature></app-temperature>

    <app-like-counter></app-like-counter>
  `,
  styles: ``
})
export default class Poubelle {

}
