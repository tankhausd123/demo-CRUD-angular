import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductInterface} from './ProductInterface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() {
  }

  showImage = true;
  widthImage = 100;


  public Product: ProductInterface[] = [{
    id: 1,
    name: 'nautilus 1',
    price: 3000,
    image: 'assets/ProductImage/nautilus.jpeg'
  }, {
    id: 2,
    name: 'nautilus 2',
    price: 3000,
    image: 'assets/ProductImage/nautilus.jpeg'
  }, {
    id: 3,
    name: 'nautilus 3',
    price: 3000,
    image: 'assets/ProductImage/nautilus.jpeg'
  }];
  productMess: any = this.Product;

  ngOnInit() {
  }

  click() {
    this.showImage = !this.showImage;
  }
  value_of_search(value) {
    if (value) {
      this.productMess = value;
    } else {
      this.productMess = this.Product;
    }
  }

  delete(id) {
    this.Product.splice(id, 1);
  }
}
