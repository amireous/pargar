import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  CategoryModel,
  HeaderItem,
  Homeitem,
  RootObjectChild,
} from '../../models/api-data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  parentItemList: RootObjectChild[] = [];
  headerItemList: HeaderItem[] = [];
  homeItemList: Homeitem[] = [];

  navbarfixed: boolean = false;
  parentCatMode: boolean = false;
  selectedParent: any = {};
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.apiService.getHomeItemData(param.id).subscribe((data) => {
          console.log(data);
          this.headerItemList = data.headeritem;
          this.homeItemList = data.homeitem;
          this.parentItemList = data.category;

          this.apiService.getHomeChildCategory().subscribe((data) => {
            this.selectedParent = data.find(
              (data) => data.id === this.parentItemList[0].parent
            );
          });
        });
        this.parentCatMode = true;
      } else {
        this.getHomeData();
      }
    });
  }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (!this.parentCatMode) {
      if (window.scrollY > 100) {
        this.navbarfixed = true;
      } else {
        this.navbarfixed = false;
      }
    }
  }

  getHomeData() {
    this.apiService.getHomeScreenData().subscribe(
      (data) => {
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
    });
    this.parentCatMode = false;
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: false,
    rtl: true,
    adaptiveHeight: true,

    nextArrow:
      "<div style='position: absolute; top: 35%; right: 1175px; cursor: pointer;transform: rotate(180deg);' class='next-slide'><i class=\"fas fa-angle-right\"></i></div>",
    prevArrow:
      "<div style='position: absolute; top: 35%; left: 1190px; z-index: 1; cursor: pointer; transform: rotate(180deg);' class='next-slide'><i class=\"fas fa-angle-left\"></i></div>",

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
