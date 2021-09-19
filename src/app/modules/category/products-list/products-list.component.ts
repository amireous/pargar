import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import { FeatureProductsObject } from 'src/app/models/products-collection.model';
import { Product, RootObjectChild } from 'src/app/models/api-data.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  productId: number = +this.route.snapshot.params['id'];
  selectedProduct: FeatureProductsObject | undefined;
  selectedproductParentDetail: RootObjectChild | undefined;
  ngOnInit(): void {
    this.apiService.getFeatureProducts(this.productId).subscribe((data) => {
      this.selectedProduct = data;
      this.findParent();
      console.log(data);
    });
  }

  findParent() {
    this.apiService.getHomeChildCategory().subscribe((data) => {
      this.selectedproductParentDetail = data.find(
        (el) =>
          el.id === this.selectedProduct?.category_model[0].parent &&
          el.is_visible === true
      );
    });
  }
}
