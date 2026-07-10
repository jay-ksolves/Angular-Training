import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.html',
  styleUrl: './forloop.css',
})
export class Forloop {
  items = ["html", "css", "js", "ts", "nextjs", "reactjs", "angular"]
  arrayofobjects = [
    { name: "jay", age: 21, id: 1 },
    { name: "abhi", age: 22, id: 2 },
    { name: "mayank", age: 23, id: 3 },
    { name: "harsh", age: 24, id: 4 },
    { name: "sagar", age: 25, id: 5 },
    { name: "nikhil", age: 26, id: 6 },
    { name: "rohan", age: 27, id: 7 },
    { name: "pankaj", age: 28, id: 8 },
    { name: "ankit", age: 29, id: 9 },
    { name: "rahul", age: 30, id: 10 },
  ];
  fruits = ["apple", "banana", "cherry", "orange", "grapes", "mango",];
  DeleteItem(index: number) {
    this.fruits.splice(index, 1);
  }
}
