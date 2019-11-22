import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  name = new FormControl('');
  price = new FormControl('');

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  findProduct(id) {
    return this.productService.findById(id);
  }
}
