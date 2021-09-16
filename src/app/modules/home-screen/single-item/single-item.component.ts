import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/api-data.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss'],
})
export class SingleItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() singleItem: Product[] = [];
}
