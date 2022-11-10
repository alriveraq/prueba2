import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoidPage } from './productoid.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoidPageRoutingModule {}
