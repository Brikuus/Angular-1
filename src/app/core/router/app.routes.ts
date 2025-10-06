import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../features/home/pages/home.page'),
  },
  {
    path: 'products',
    loadComponent: () => import('../../features/products/pages/product.page')
  },
  {
    path: 'error',
  loadComponent: () => import('../../core/pages/error.page')
  },
  {
    path: 'products/:id',
  loadComponent: () => import('../../features/products/pages/product.page')
  },
  {
    path: 'about',
  loadComponent: () => import('../../features/products/pages/about.page')
  },
  { path: 'setting',
    loadComponent: () => import('../../features/products/pages/setting.page')
  },
  //path : admin
  { path: '**', redirectTo: 'error' }
];
