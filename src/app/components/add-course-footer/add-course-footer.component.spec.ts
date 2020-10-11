import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseFooterComponent } from './add-course-footer.component';

describe('AddCourseFooterComponent', () => {
  let component: AddCourseFooterComponent;
  let fixture: ComponentFixture<AddCourseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
