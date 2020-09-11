import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
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

  ngOnInit(): void {}

  clickProduct(id: number): void {
    console.log(id);
  }
}
