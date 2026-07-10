import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(0);
  value = signal("hello")
  increment() {
    this.count.update((c) => c + 1);
    this.value.set("world");
  }
  decrement() {
    this.count.update((c) => c - 1);
    this.value.set("world");
  }
}
