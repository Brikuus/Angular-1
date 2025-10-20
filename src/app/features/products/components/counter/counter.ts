import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
// Création du signal
  count = signal(0);

  increment(): void {
    this.count.update(current => current + 1);
  }

  decrement(): void {
    this.count.update(current => current - 1);
  }

  reset(): void {
    this.count.set(0);
  }}
