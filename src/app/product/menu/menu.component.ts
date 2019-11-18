import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() products: any;
  @Output() product = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search(event) {
    const searchText = event.target.value;
    if (searchText) {
      this.products = this.products.filter(product => product.name.includes(searchText));
    } else {
      this.products = null;
    }
    this.product.emit(this.products);
  }
}
