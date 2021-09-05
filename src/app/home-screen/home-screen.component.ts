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
          (item: any) => item.is_visible === true
        );
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
    //  this.apiService.getHeaderItemChilds().subscribe((childData) => {
    //    console.log(childData);
    //  });
  }
}
