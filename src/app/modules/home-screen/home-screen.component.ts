import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  ProductItem,
  Homeitem,
  RootObjectChild,
} from '../../models/api-data.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  // parentItemList: ParentCategory[] = [];
  parentItemList: RootObjectChild[] = [];
  headerItemList: ProductItem[] = [];
  homeItemList: Homeitem[] = [];

  parent: RootObjectChild[] = [];

  navbarfixed: boolean = false;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: true,
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

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHomeScreenData().subscribe(
      (data) => {
        console.log(data);
        this.headerItemList = data.headeritem;
        this.homeItemList = data.homeitem.filter(
          (item: any) => item.products.length > 0
        );
        this.homeItemList.filter((item) => item.products);
      },
      (err) => {
        console.log(err);
      }
    );
    this.apiService.getHomeChildCategory().subscribe((data) => {
      this.parentItemList = data;
      console.log(data);
    });
  }
}
