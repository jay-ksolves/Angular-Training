import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface Users {
  id: number;
  name: string;
  email: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class Userapi {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getUserData() {
    return this.http.get<Users[]>(this.apiUrl).pipe(tap((response) => console.log(response)));
  }
}
