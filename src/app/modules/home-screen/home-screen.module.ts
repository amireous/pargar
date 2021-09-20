import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeScreenComponent } from './home-screen.component';
import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NormallComponent } from './components/normall/normall.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { FeaturesItemsComponent } from './components/feature-items/feature-items.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    NormallComponent,
    SingleItemComponent,
    FeaturesItemsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HomeScreenRoutingModule,
    SlickCarouselModule,
  ],
  exports: [NormallComponent],
})
export class HomeScreenModule {}
