import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  CategoryItems,
  CategoryModel,
  CommentModel,
  Product,
  ProductDetails,
} from 'src/app/models/api-data.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { DialogBoxComponent } from '../../layout/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  selectedProductId: number | undefined;
  selectedProduct: ProductDetails | undefined;
  productComments: CommentModel[] = [];
  relatedProducts: CategoryItems[] = [];
  commentMode: boolean = false;
  subscription: Subscription | undefined;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private authServie: AuthService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      panelClass: 'dialog',
    });
  }

  ngOnInit(): void {
    this.intial();
  }

  intial() {
    this.route.params.subscribe((param) => {
      this.selectedProductId = +param;
      this.selectedProductId = param.id;
      this.apiService.getProductDetail(param.id).subscribe((data) => {
        this.selectedProduct = data;
        console.log(this.selectedProduct);
      });

      this.apiService.getProductComments(param.id).subscribe((data) => {
        console.log(data);
        this.productComments = data;
      });

      this.apiService.getRelatedProducts(param.id).subscribe((data) => {
        console.log(data);
        this.relatedProducts = data.slice(0, 4);
      });
    });
  }

  onAddComment() {
    this.subscription = this.authServie.isLogged.subscribe((status) => {
      if (!status) {
        this.openDialog();
      } else {
        this.commentMode = true;
      }
    });
  }

  onDismissComment() {
    this.commentMode = false;
  }

  onSubmitComment(commentMsg: string) {
    const userCommentData = {
      title: '',
      comment_text: commentMsg,
      score: 5,
    };

    if (this.selectedProductId) {
      this.apiService
        .postUserComment(this.selectedProductId, userCommentData)
        .subscribe((res) => alert(res.message));
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
