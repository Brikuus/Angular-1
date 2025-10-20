import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const key = localStorage.getItem('accessKey');

    if (key === 'iLoveSalmon') {
      return true;
    } else {

      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
};
