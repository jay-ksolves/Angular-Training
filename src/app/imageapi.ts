import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

export interface Image {
  albumId?: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  alt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Imageapi {
  private http = inject(HttpClient);
  private apiURL = 'https://picsum.photos';

  getImages() {
    return this.http
      .get<any[]>(`${this.apiURL}/v2/list?limit=10`)
      .pipe(
        map((response) =>
          response.map((item) => ({
            id: parseInt(item.id, 10),
            title: `Photo by ${item.author}`,
            url: `https://picsum.photos/id/${item.id}/500/500`,
            thumbnailUrl: `https://picsum.photos/id/${item.id}/50/50`,
          }))
        ),
        tap((response) => console.log('Fetched images:', response))
      );
  }

  getImageById(id: number) {
    return this.http
      .get<any>(`${this.apiURL}/id/${id}/info`)
      .pipe(
        map((item) => ({
          id: parseInt(item.id, 10),
          title: `Photo by ${item.author}`,
          url: `https://picsum.photos/id/${item.id}/500/500`,
          thumbnailUrl: `https://picsum.photos/id/${item.id}/50/50`,
        })),
        tap((response) => console.log('image of', id, response))
      );
  }
}
