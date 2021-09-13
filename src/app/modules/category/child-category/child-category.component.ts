import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.scss'],
})
export class ChildCategoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('test cat child');
  }
}
