import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.scss'],
})
export class ChildCategoryComponent implements OnInit {
  selectedId: number = +this.route.snapshot.params['id'];
  categoryItemsList: any = [];
  selectedCategoryParent: any = {};
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.apiService.getCategoryData(param.id).subscribe((data) => {
        this.categoryItemsList = data;
      });
    });
    this.apiService.getHomeChildCategory().subscribe((data) => {
      console.log(data);
      console.log(
        data.find((item) =>
          item.childs?.find((child) => child.id === this.selectedId)
        )
      );
      this.selectedCategoryParent = data.find((item) =>
        item.childs?.find((child) => child.id === this.selectedId)
      );
    });
  }
}
