import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeScreenComponent } from './home-screen.component';
import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NormallComponent } from './normall/normall.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { FeaturesItemsComponent } from './feature-items/feature-items.component';

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
})
export class HomeScreenModule {}
