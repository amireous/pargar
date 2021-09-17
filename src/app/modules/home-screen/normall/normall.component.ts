import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/api-data.model';

@Component({
  selector: 'app-normall',
  templateUrl: './normall.component.html',
  styleUrls: ['./normall.component.scss'],
})
export class NormallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() products: Product[] = [];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    infinite: true,
    arrows: true,
    rtl: true,
    nextArrow:
      "<div style='position: absolute; top: 35%; right: 1175px; cursor: pointer;transform: rotate(180deg);' class='next-slide'><i class=\"fas fa-angle-right\"></i></div>",
    prevArrow:
      "<div style='position: absolute; top: 35%; left: 1190px; z-index: 1; cursor: pointer; transform: rotate(180deg);' class='next-slide'><i class=\"fas fa-angle-left\"></i></div>",
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
}
