import { Routes } from '@angular/router';
import SettingPage from '../features/products/pages/setting.page';
import {helloResolver} from './resolvers/hello-resolver';
import ProductPage from '../features/products/pages/product.page';
import {AdminPage} from '../features/products/pages/admin.page';
import {authGuard} from './guards/auth-guard';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/home/pages/home.page'),
  },
  { path: 'products', component: ProductPage},
  {
    path: 'error',
  loadComponent: () => import('../core/pages/error.page')
  },
  {
    path: 'products/:id',
  loadComponent: () => import('../features/products/pages/product-detail.page')
  },
  {
    path: 'about',
  loadComponent: () => import('../features/products/pages/about.page')
  },
  {
    path: 'setting',
    loadComponent: () => import('../features/products/pages/setting.page')
  },
  {
    path: 'register',
  loadComponent: () => import('../auth/register/register-form.page/register-form.page'),
  },
  {
    path: 'login',
  loadComponent: () => import('../auth/login/login-form.page/login-form.page'),
  },
  { path: 'hello', component: SettingPage, resolve: { message: helloResolver } },
  { path: 'admin', component: AdminPage, canActivate: [authGuard] },
  { path: '**', redirectTo: 'error' }
];
