import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoidPageRoutingModule } from './productoid-routing.module';

import { ProductoidPage } from './productoid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoidPageRoutingModule
  ],
  declarations: [ProductoidPage]
})
export class ProductoidPageModule {}
