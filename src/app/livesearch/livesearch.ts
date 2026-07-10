import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-livesearch',
  imports: [CommonModule],
  templateUrl: './livesearch.html',
  styleUrl: './livesearch.css',
})
export class Livesearch {
  searchterm = signal('')
  data = [{
    id: 1,
    name: 'jay'
  },
  {
    id: 2,
    name: 'hari'
  },
  {
    id: 3,
    name: 'sai'
  }
  ];
  filteredData(searchterm: string) {
    if (!searchterm) return this.data;

    return this.data.filter((i) => {
      return i.name.toLowerCase().includes(searchterm.toLowerCase());
    });
  }
}
