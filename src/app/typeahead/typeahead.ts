import { Component, inject, signal } from '@angular/core';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-typeahead',
  imports: [Card, CommonModule],
  templateUrl: './typeahead.html',
  styleUrl: './typeahead.css',
})
export class Typeahead {
  private http = inject(HttpClient);

  readonly API_URL = 'https://jsonplaceholder.typicode.com/users';

  // 1. Single source of truth for the input term
  searchterm = signal<string>('');

  // 2. Reactively fetch data whenever the signal changes
  private searchStream = toObservable(this.searchterm).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term) => {
      const trimmed = term.trim();
      if (!trimmed) {
        return of([]); // Return empty array immediately if input is empty
      }
      return this.http.get<User[]>(`${this.API_URL}?q=${trimmed}`);
    }),
  );

  // 3. Expose the results as a read-only signal
  filteredData = toSignal(this.searchStream, { initialValue: [] });

  allData = toSignal(this.http.get<User[]>(this.API_URL), { initialValue: [] });

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchterm.set(input.value);
  }

  onClearSearch() {
    this.searchterm.set('');
  }
}
