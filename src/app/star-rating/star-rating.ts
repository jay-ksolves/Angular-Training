import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  stars = signal<number[]>([0, 1, 2, 3, 4, 5]);
  userRating = signal<number>(0);

  rate(rating: number) {
    this.userRating.set(rating);
  }
}
