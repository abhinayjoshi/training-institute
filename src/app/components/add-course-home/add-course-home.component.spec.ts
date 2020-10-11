import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseHomeComponent } from './add-course-home.component';

describe('AddCourseHomeComponent', () => {
  let component: AddCourseHomeComponent;
  let fixture: ComponentFixture<AddCourseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
