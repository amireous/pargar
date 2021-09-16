import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesItemsComponent } from './feature-items.component';

describe('FeaturesListComponent', () => {
  let component: FeaturesItemsComponent;
  let fixture: ComponentFixture<FeaturesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturesItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
