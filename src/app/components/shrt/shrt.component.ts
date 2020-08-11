import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-shrt',
  templateUrl: './shrt.component.html',
  styleUrls: ['./shrt.component.css']
})
export class ShrtComponent implements OnInit {

  @Input() url:string="";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  shorten(): void {    
    this.http.post<{code:string}>("http://shortcode.okey.run/short_codes",{url: this.url},httpOptions)
    .subscribe(response =>{console.log(response.toString()); this.url = response.code});
    this.url="";
  }
}
