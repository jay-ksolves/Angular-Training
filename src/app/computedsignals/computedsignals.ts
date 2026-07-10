import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computedsignals',
  imports: [],
  templateUrl: './computedsignals.html',
  styleUrl: './computedsignals.css',
})

export class Computedsignals {
  count = signal<number>(0)
  doubleCount = computed<number>(() => {
    return this.count() * 2;
  });
  tripleCount = computed<number>(() => {
    return this.count() * 3;
  });
  increment() {
    this.count.update((val) => val + 1);
  };
  firstName = signal<string>("Jay");
  LastName = signal<string>("Prakash");
  fullname = computed<string>(() => {
    return this.firstName() + " " + this.LastName()
  });
  showName() {
    return this.fullname()
  };
}
