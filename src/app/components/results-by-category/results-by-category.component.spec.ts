import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsByCategoryComponent } from './results-by-category.component';

describe('ResultsByCategoryComponent', () => {
  let component: ResultsByCategoryComponent;
  let fixture: ComponentFixture<ResultsByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsByCategoryComponent]
    });
    fixture = TestBed.createComponent(ResultsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
