import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductInterface} from './ProductInterface';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  p = 1;

  constructor(private productService: ProductService) {
  }

  productId;
  showImage = true;
  listProduct = this.productService.getAll();


  ngOnInit() {
    this.listProduct = this.productService.getAll();
  }

  click() {
    this.showImage = !this.showImage;
  }

  value_of_search(value) {
    if (value) {
      this.listProduct = value;
    } else {
      this.listProduct = this.productService.getAll();
    }
  }

  delete(id) {
    this.listProduct.splice(id, 1);
  }
  findProduct(i: number): ProductInterface {
    return this.productId = this.productService.findById(i);
  }
}
