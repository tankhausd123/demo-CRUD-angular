import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormEdit: FormGroup;
  id = +this.routerMap.snapshot.paramMap.get('id');

  constructor(private productService: ProductService,
              private routerMap: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    const product = this.productService.findById(this.id);
    this.productFormEdit = this.fb.group({
      id: [product.id],
      name: [product.name],
      price: [product.price],
      image: [product.image],
      star: [product.star]
    });
    console.log(this.productFormEdit);
  }
  get name() {
    return this.productFormEdit.get('name');
  }
  get price() {
    return this.productFormEdit.get('price');
  }
  submit() {
    this.productService.update(this.productFormEdit.value, this.id);
    this.router.navigate(['/products']);
  }
}
