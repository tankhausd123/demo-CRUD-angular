import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  private products = this.productService.getAll();
  productForm = this.fb.group({
    id: [this.products.length + 1],
    name: ['', Validators.required],
    price: ['', Validators.required],
    image: ['assets/ProductImage/dong-ho.jpg'],
    star: ['']
  });

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit() {
  }
  submit() {
    const productNew = this.productForm.value;
    this.productService.create(productNew);
    this.route.navigate(['/products']);
  }

  get id() {
    return this.productForm.get('id');
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

}
