import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Checkbox';
  cForm!:FormGroup;

  constructor(private fb:FormBuilder) {
   
    }
    ngOnInit(){
      this.cForm = this.fb.group({
        check: [''],
        radio:['false'],
        check1: [],
        radio1:[]
      })
    }
  onSubmit(form:any){
    console.log(form);
  }
}
