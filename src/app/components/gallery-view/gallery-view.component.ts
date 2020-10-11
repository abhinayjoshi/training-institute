import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {

  imgsrcs = [];

  constructor(
    // tslint:disable-next-line: variable-name
    public _d: DomSanitizer,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  fileChange(e, i) {
    const file = e.srcElement.files[0];
    if (this.imgsrcs.length < 5) {
      this.imgsrcs.push(window.URL.createObjectURL(file));
    } else {
      this.messageService.add({severity: 'error', detail: 'You can upload upto 5 images'});
    }
  }

}
