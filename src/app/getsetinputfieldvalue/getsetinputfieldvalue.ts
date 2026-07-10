import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetinputfieldvalue',
  imports: [],
  templateUrl: './getsetinputfieldvalue.html',
  styleUrl: './getsetinputfieldvalue.css',
})
export class Getsetinputfieldvalue {
  name: string = "Jay";
  city: string = "Patna"
  email: string = "jay.prakash@ksolves.com"
  updateName(name: string
  ) {
    this.name = name;
  };
  getuseremail(email: string) {
    this.email = email;
  }
}
