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
  productForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    price: ['', Validators.required],
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
