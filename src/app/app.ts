import { Component, signal } from '@angular/core';
import {ProductList} from './features/products/components/product-list/product-list';
import {Header} from './core/components/header/header';
import {Footer} from './core/components/footer/footer';
import {ProductCard} from './features/products/components/product-card/product-card';


@Component({
  selector: 'app-root',
  imports: [ProductList, Header, Footer, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
