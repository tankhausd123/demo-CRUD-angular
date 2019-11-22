import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductComponent} from './product/product.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';


const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/:id/edit', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
