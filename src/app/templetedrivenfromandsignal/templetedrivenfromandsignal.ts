import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templetedrivenfromandsignal',
  imports: [FormsModule],
  templateUrl: './templetedrivenfromandsignal.html',
  styleUrl: './templetedrivenfromandsignal.css',
})
export class Templetedrivenfromandsignal {
  name = signal<string>("name");
  email = signal<string>("email");
  submitForm() {
    console.log(`Name: ${this.name()}, Email: ${this.email()}`);
  }
}
