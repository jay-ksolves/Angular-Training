import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  fname = "JAY";
  lname = "prakash";
  date = new Date();
  amount = 1000;
  value=67;
  data = {
    name: "John",
    age: 30,
    salary: 10000
  }
}
