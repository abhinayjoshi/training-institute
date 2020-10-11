import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-course-home',
  templateUrl: './add-course-home.component.html',
  styleUrls: ['./add-course-home.component.scss']
})
export class AddCourseHomeComponent implements OnInit {

  courseDetails;
  errors = {
    courseName: false,
    aircraft: false,
    batchDetails: false
  };
  activeBatch = {};
  items;
  languages = [
    { id: 1, name: 'Hindi' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Bengali' },
    { id: 4, name: 'Marathi' },
    { id: 5, name: 'Telgu' },
    { id: 6, name: 'Tamil' },
    { id: 7, name: 'Gujarati' }
  ];
  locations = [
    {label: 'Kolkata', value: 'Kolkata'},
    {label: 'Bengaluru', value: 'Bengaluru'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'New Delhi', value: 'New Delhi'},
    {label: 'Pune', value: 'Pune'},
    {label: 'Chennai', value: 'Chennai'},
  ];
  headers = ['batch', 'start date', 'end date'];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.courseDetails = {courseName: '', batchDetails: []};
    this.courseDetails.batchDetails = [{
      batchName: 'Batch 1',
      location: '',
      language: [],
      error: false
    }];
    this.activeBatch[this.courseDetails.batchDetails[0].batchName] = true;
    this.activeBatch = Object.assign({}, this.activeBatch);

    this.items = [
          {label: 'Reset', icon: 'pi pi-replay', command: (event) => { this.resetBatch(); } },
          {label: 'Delete', icon: 'pi pi-trash', command: (event) => { this.deleteBatch(); }}
    ];
  }

  onSubmit() {
    let error = false;
    if (!this.courseDetails.courseName) {
      this.errors.courseName = true;
      error = true;
    } else {
      this.errors.courseName = false;
    }
    if (!this.courseDetails.aircraft) {
      this.errors.aircraft = true;
      error = true;
    } else {
      this.errors.aircraft = false;
    }
    this.courseDetails.batchDetails.forEach(batch => {
      if (!batch.location || !batch.startDt || !batch.endDt
         || batch.language === [] || !batch.cost || !batch.isWeekend) {
        batch.error = true;
        this.errors.batchDetails = true;
        error = true;
      } else {
        batch.error = false;
      }
    });
    if (error) {
      this.messageService.add({severity: 'error', detail: 'Fill in the required information to'});
    }
    console.log(this.courseDetails);
  }

  addBatch() {
    this.courseDetails.batchDetails.push(
      {
        batchName: `Batch ${this.courseDetails.batchDetails.length + 1}`,
        location: '',
        language: [],
        error: false
      }
    );
    this.activeBatch = {};
    this.activeBatch[this.courseDetails.batchDetails[this.courseDetails
      .batchDetails.length - 1].batchName] = true;
    this.activeBatch = Object.assign({}, this.activeBatch);
  }

  deleteBatch() {
    this.courseDetails.batchDetails = this.courseDetails.batchDetails
      .filter(batch => batch.batchName !== Object.keys(this.activeBatch)[0]);
  }

  resetBatch() {
    this.courseDetails.batchDetails = this.courseDetails.batchDetails.map(batch => {
      let obj = {};
      if (batch.batchName === Object.keys(this.activeBatch)[0]) {
        obj = {
          batchName: batch.batchName,
          location: '',
          language: [],
          error: false
        };
        return obj;
      } else {
        return batch;
      }
    });
    console.log(this.activeBatch);
  }

  changeActiveBatch(event, batch) {
    if (this.activeBatch[batch.batchName]) {
      this.activeBatch[batch.batchName] = false;
      this.activeBatch = {};
    } else {
      this.activeBatch = {};
      this.activeBatch[batch.batchName] = true;
      this.activeBatch = Object.assign({}, this.activeBatch);
    }
  }

}
