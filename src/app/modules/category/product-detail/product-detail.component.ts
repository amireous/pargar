import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CategoryItems,
  CategoryModel,
  CommentModel,
  Product,
  ProductDetails,
} from 'src/app/models/api-data.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  selectedProductId: number = +this.route.snapshot.params['id'];
  selectedProduct: ProductDetails | undefined;
  productComments: CommentModel[] = [];
  relatedProducts: CategoryItems[] = [];
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.intial();
  }

  intial() {
    this.apiService
      .getProductDetail(this.selectedProductId)
      .subscribe((data) => {
        // console.log(data);
        this.selectedProduct = data;
        console.log(this.selectedProduct);
      });

    this.apiService
      .getProductComments(this.selectedProductId)
      .subscribe((data) => {
        console.log(data);
        this.productComments = data;
      });

    this.apiService
      .getRelatedProducts(this.selectedProductId)
      .subscribe((data) => {
        console.log(data);
        this.relatedProducts = data.slice(0, 4);
      });
  }
}
