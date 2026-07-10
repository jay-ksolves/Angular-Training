import { Component } from '@angular/core';

@Component({
  selector: 'app-styleinangular',
  imports: [],
  templateUrl: './styleinangular.html',
  // styleUrl: './styleinangular.css',
  styleUrls: ['./styleinangular.css', './anothercssfile.css'],
  styles: [`p {
        font-size: 2rem;
        color: blue;
    }`]
})
export class Styleinangular { }
