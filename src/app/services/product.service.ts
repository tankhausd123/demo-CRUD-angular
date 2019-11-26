import {Injectable} from '@angular/core';
import {ProductInterface} from '../product/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  product: ProductInterface[] = [
    {
      id: 1,
      name: 'Rolex Datejust 2019',
      price: '287.700.000',
      image: 'assets/ProductImage/rolex.jpg',
      star: 5
    }, {
      id: 2,
      name: 'Orient ',
      price: '6.300.000',
      image: 'assets/ProductImage/orient.jpg',
      star: 3
    }, {
      id: 3,
      name: 'Patek Philippe Nautilus ',
      price: '550.000.000',
      image: 'assets/ProductImage/nautilus.jpeg',
      star: 5
    }, {
      id: 4,
      name: 'Casio G-SHOCK',
      price: '10.900.000',
      image: 'assets/ProductImage/casio.jpg',
      star: 3
    }, {
      id: 5,
      name: 'Hublot Big Bang',
      price: '202.500.000',
      image: 'assets/ProductImage/hublot.jpg',
      star: 5
    }, {
      id: 6,
      name: 'Seiko 5',
      price: '3.800.000',
      image: 'assets/ProductImage/seiko.jpg',
      star: 4
    }, {
      id: 7,
      name: 'OlymPianus OP990',
      price: '4.600.000',
      image: 'assets/ProductImage/olym.jpg',
      star: 3
    }];

  getAll(): ProductInterface[] {
    return this.product;
  }
  search(value) {
    return this.product.filter(product => product.name.indexOf(value) !== -1);
  }
  create(product) {
    return this.product.push(product);
  }
  findById(id: number): ProductInterface {
    return this.product[id];
  }
  update(product: ProductInterface,
         index: number) {
    this.product[index] = product;
  }
}
