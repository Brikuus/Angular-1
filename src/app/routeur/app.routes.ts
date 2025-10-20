import { Routes } from '@angular/router';
import SettingPage from '../features/products/pages/setting.page';
import { goodbyeResolver, helloResolver } from './resolvers/hello-resolver';
import { AdminPage } from '../features/products/pages/admin.page';
import { AuthGuard } from './guards/auth-guard';
import ErrorPage from '../core/pages/error.page';
import { productResolver } from './resolvers/products-resolver';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/home/pages/home.page'),
  },
  { path: 'products', loadComponent: () => import('../features/products/pages/product.page'), resolve: {products: productResolver }},
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
  { path: 'goodbye', component: SettingPage, resolve: { message: goodbyeResolver } },
  { path: 'admin', component: AdminPage, canActivate: [AuthGuard] },
  {
    path: 'unauthorized',
    component: ErrorPage
  },
  {
    path: 'bin', loadComponent: () => import('../features/products/pages/poubelle')
  },
  { path: '**', redirectTo: 'error' }
];
