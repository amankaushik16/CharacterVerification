import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  selectedFile: any;

  onFileSelected(event: any){
    // console.log(event);
    this.selectedFile = event.target.files[0];
  }

  // onUpload(event:any){
  //   this.selectedFile = event.target.files[0];
  // }

  // ev(){

  // }
  // constructor(private http: HttpClient) { 
  //   this.http.post('')
  // }

  ngOnInit(): void {}

}
