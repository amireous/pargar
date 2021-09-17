import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/api-data.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss'],
})
export class SingleItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.singleItem);
    console.log(this.singleItem[0].product_type, this.singleItem[0].products);
  }

  @Input() singleItem: Product[] = [];
}
