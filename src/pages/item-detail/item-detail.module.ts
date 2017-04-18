import { NgModule } from '@angular/core';
import { ItemDetailPage } from './item-detail';

@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailModule {}
