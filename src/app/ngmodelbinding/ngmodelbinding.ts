import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodelbinding',
  imports: [FormsModule],
  templateUrl: './ngmodelbinding.html',
  styleUrl: './ngmodelbinding.css',
})
export class Ngmodelbinding {
  username: string = "jay"
}
