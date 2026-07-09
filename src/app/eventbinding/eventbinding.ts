import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  imports: [],
  templateUrl: './eventbinding.html',
  styleUrl: './eventbinding.css',
})
export class Eventbinding {
  name: string = "Jay";
  ShowName() {
    window.alert(this.name);
  }
}
