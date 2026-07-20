import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(tap({
    error: (error) => {
      console.error(`Error occurred during HTTP request to ${req.url}:`, error);
    }
  }));
};
