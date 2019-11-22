import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from '../ProductInterface';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() product = new EventEmitter();

  constructor(private productService: ProductService) {
  }

  productSearch: ProductInterface[] | ProductService;
  products = this.productService;

  ngOnInit() {
    this.productSearch = this.products;
  }

  productFilter(event) {
    const searchText = event.target.value;
    this.productSearch = (event) ? this.productService.search(searchText) : this.products;
    this.product.emit(this.productSearch);
  }
}
