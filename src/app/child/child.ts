import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child',
  imports: [RouterOutlet],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {}
