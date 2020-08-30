import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-store';
  items = ['Steven', 'Carvajal'];

  products: Product[] = [
    {
      id: 0,
      nombre: 'pd1',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: 1,
      nombre: 'pd2',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: 2,
      nombre: 'pd3',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: 3,
      nombre: 'pd4',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: 4,
      nombre: 'pd5',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clickProduct(id: number) {
    console.log(id);
  }
}
