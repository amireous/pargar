import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Headeritem, Homeitem, ParentCategory } from '../models/api-data.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  parentItemList: ParentCategory[] = [];
  headerItemList: Headeritem[] = [];
  homeItemList: Homeitem[] = [];

  navbarFixed: boolean = false;

  navbarfixed: boolean = false;

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
        this.parentItemList = data.parent_categories.filter(
          (item) => item.is_visible === true
        );

        this.headerItemList = data.headeritem;
        this.homeItemList = data.homeitem.filter(
          (item) => item.products.length > 0
        );

        this.homeItemList.filter((item) => item.products);

        console.log(this.homeItemList);
        console.log(this.parentItemList);
        console.log(this.headerItemList);
      },
      (err) => {
        console.log(err);
      }
    );

    // this.apiService.getHeaderItemChilds().subscribe((childData) => {
    //   console.log(childData);
    // });
  }
}
