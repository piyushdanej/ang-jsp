import { Component , OnInit} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { UploadItem } from 'angular2-http-file-upload';

@Component({
  selector: 'app-root',
  template: '<p>HELLO WORLD <a href="{{resp}}" download >Click Me</a>{{resp}} ' +
            '<input type="file"\n' +
  'ngFileSelect\n' +
  '[options]="options"\n' +
  '(onUpload)="handleUpload($event)"\n' +
  '(beforeUpload)="beforeUpload($event)">',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uploadFile: any;
  hasBaseDropZoneOver = false;
  options: Object = {
    url: 'http://localhost:8080/ProjSecond/index.jsp'
  };
  sizeLimit = 2000000;

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
/*
  ngOnInit(){}
  resp: string;

  constructor(public upload: UploadItem ){
    /!*this.http.get('http://localhost:8080/ProjSecond/index.jsp?name=PIyush')
      .subscribe(
        (response) => {console.log('RESPONSE IS : ' + response); this.resp = response.text(); },
      (e) => {console.log('ERROR IS : ' + e); } );*!/

  }
*/


}
