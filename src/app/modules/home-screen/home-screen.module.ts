import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeScreenComponent } from './home-screen.component';
import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [HomeScreenComponent],
  imports: [
    RouterModule,
    CommonModule,
    HomeScreenRoutingModule,
    SlickCarouselModule,
  ],
})
export class HomeScreenModule {}
