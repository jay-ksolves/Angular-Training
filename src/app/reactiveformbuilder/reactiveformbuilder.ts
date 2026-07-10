import { Component, signal } from '@angular/core';
import { ReactiveFormsModule , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactiveformbuilder',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveformbuilder.html',
  styleUrl: './reactiveformbuilder.css',
})
export class Reactiveformbuilder {

  userSignal= signal({name:'', email:''});
form:any
  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      name:[''],
      email:['']
    })
    this.form.valueChanges.subscribe((value:any)=>{
      this.userSignal.set(value)
    })
  };
submitform(){
  this.userSignal.set(this.form.value);
  console.log(this.userSignal())  ;  
}
}
