import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryItems, RootObjectChild } from 'src/app/models/api-data.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.scss'],
})
export class ChildCategoryComponent implements OnInit {
  selectedId: number = +this.route.snapshot.params['id'];
  categoryItemsList: CategoryItems[] = [];
  selectedCategoryParent: RootObjectChild | undefined;
  isCategoryPath: boolean = false;

  limitNumber: number = 20;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (this.router.url === `/category/${param.id}`) {
        this.apiService.getCategoryData(param.id).subscribe((data) => {
          this.categoryItemsList = data;

          this.apiService.getHomeChildCategory().subscribe((data) => {
            this.selectedCategoryParent = data.find((item) =>
              item.childs?.find((child) => child.id === this.selectedId)
            );
          });
        });
        this.isCategoryPath = true;
      } else {
        this.apiService.getModuleData(param.id).subscribe((data) => {
          this.categoryItemsList = data;
        });
      }
    });
  }

  onSeeMore() {
    this.limitNumber += 20;
    this.apiService
      .getModuleData(this.selectedId, this.limitNumber)
      .subscribe((data) => {
        this.categoryItemsList = data;
      });
  }
}
