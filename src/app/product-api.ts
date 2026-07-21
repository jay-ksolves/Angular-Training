import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductAPi {
  readonly apiURL = 'https://fakestoreapi.com/products';

  private http = inject(HttpClient);

  getProducts() {
    return this.http
      .get<products[]>(this.apiURL)
      .pipe(tap((response) => console.log(' API Response:', response)));
  }
}
