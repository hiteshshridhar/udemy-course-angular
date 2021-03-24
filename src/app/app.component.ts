import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastr: ToastrService){
  
  }
  
  title = 'udemy-course-angular';
  course = ['Angular', 'React', 'Vue'];
  
}


function private(private: any, toastr: any, ToastrService: any) {
  throw new Error('Function not implemented.');
}
function toastr(private: (private: any, toastr: any, ToastrService: any) => void, toastr: any, ToastrService: any) {
  throw new Error('Function not implemented.');
}

