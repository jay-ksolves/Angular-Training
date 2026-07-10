import { Component, signal } from '@angular/core';

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
  };
  showEvent(e: any) {
    console.log(e);
    window.alert("Check console log for event!")
  };
  userName = signal('Meow');
  setUserName(e: any) {
    this.userName.set(e);
  };
}
