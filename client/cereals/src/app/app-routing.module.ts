import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGridPage } from './products/pages/product-grid.page/product-grid.page';

const routes: Routes = [
  { path: 'product-page', component: ProductGridPage },
  { path: '**', component: ProductGridPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
