import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/api-data.model';

@Component({
  selector: 'app-feature-items',
  templateUrl: './feature-items.component.html',
  styleUrls: ['./feature-items.component.scss'],
})
export class FeaturesItemsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() featureItems: Product[] = [];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: -1,
    dots: false,
    infinite: false,
    arrows: true,

    initialSlide: 0,
    nextArrow:
      "<div style='position: absolute; top: 35%; right: -35px; cursor: pointer;' class='next-slide'><i class=\"fas fa-angle-right\"></i></div>",
    prevArrow:
      "<div style='position: absolute; top: 35%; left: -25px; z-index: 1; cursor: pointer;' class='next-slide'><i class=\"fas fa-angle-left\"></i></div>",
    // initialSlide: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //  addSlide() {
  //    this.slides.push(488);
  //  }

  //  removeSlide() {
  //    this.slides.length = this.slides.length - 1;
  //  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
