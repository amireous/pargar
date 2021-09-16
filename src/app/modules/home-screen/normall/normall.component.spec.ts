import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormallComponent } from './normall.component';

describe('NormallComponent', () => {
  let component: NormallComponent;
  let fixture: ComponentFixture<NormallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
