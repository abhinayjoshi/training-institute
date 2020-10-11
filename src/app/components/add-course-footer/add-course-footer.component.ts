import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-course-footer',
  templateUrl: './add-course-footer.component.html',
  styleUrls: ['./add-course-footer.component.scss']
})
export class AddCourseFooterComponent implements OnInit {

  @Output() submitRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitRequest.emit('true');
  }

}
