import { Component } from '@angular/core';
import {Header} from './core/components/header/header';
import {Footer} from './core/components/footer/footer';
import {ResolveEnd, ResolveStart, Router, RouterOutlet} from '@angular/router';
import {ToastError} from './shared/components/toast-error';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, ToastError],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  loading = false;

  // Écouter le lancement et la fin d'un resolver
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof ResolveStart) this.loading = true;
      if (event instanceof ResolveEnd) this.loading = false;
    });
  }



}
