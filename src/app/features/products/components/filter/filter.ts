import {Component, input, output, signal} from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {
  categories = ['clothing', 'gaming', 'home', 'electronics', 'sports', '']; // '' = reset
  active = input.required<string>();
  changeCategory = output<string>()

  onClick(category: string) {
    this.changeCategory.emit(category)
  }
}
