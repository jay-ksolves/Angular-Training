import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {}
