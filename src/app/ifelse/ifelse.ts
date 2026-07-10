import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  isTrue:boolean=true;
  marks: number=85;
  showBox:boolean=true;
  toogleShowBox(){
    this.showBox=!this.showBox;
  }
}
