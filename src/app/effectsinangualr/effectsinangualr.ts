import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effectsinangualr',
  imports: [],
  templateUrl: './effectsinangualr.html',
  styleUrl: './effectsinangualr.css',
})
export class Effectsinangualr {
  count = signal(0);
  constructor() {
    effect(() => {
      console.log(this.count())
      document.body.style.border = this.count() % 2 === 0 ? '3px solid red' : '3px solid blue'
    })

  };
  increment() {
    this.count.update((c) => c + 1)
  };
}
