import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface ApiResponse {
  data: any;        // Replace 'any' with proper interface later
  status?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  private http = inject(HttpClient);
  private apiUrl = 'https://lorem-api.com/api/article/foo';

  getData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      tap(response => console.log('✅ API Response:', response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): never {
    console.error('❌ API Error:', error);
    // You can add more logic here (toast notification, etc.)
    throw error;
  }
}