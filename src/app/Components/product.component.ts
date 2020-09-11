import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy, OnChanges {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. OnChange');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('3. OnInit');
  }

  // ngDoCheck(): void {
  //   console.log('4. DoCheck');
  // }

  ngOnDestroy(): void {
    console.log('5. OnDestrioy');
  }

  addCart(): void {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
