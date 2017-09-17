import { Component , OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  template: '<p>HELLO WORLD <a href="{{resp}}" download >Click Me</a>{{resp}}',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){}

  resp;

  constructor(private http: Http){
    this.http.get('http://localhost:8080/ProjSecond/index.jsp?name=PIyush')
      .subscribe(
        (response) => {console.log('RESPONSE IS : '+ response); this.resp = response.text(); },
      (e) => {console.log('ERROR IS : ' + e); } );
  }

}
