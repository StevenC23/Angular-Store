import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: '0',
      nombre: 'pd1',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: '1',
      nombre: 'pd2',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: '2',
      nombre: 'pd3',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: '3',
      nombre: 'pd4',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
    {
      id: '4',
      nombre: 'pd5',
      img: 'assets/images/ccc.jpg',
      price: 2500,
      description: 'blablabla',
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((item) => id === item.id);
  }
}
