import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {

  const startTime = Date.now();
  console.log(`Request to ${req.url} started at ${new Date(startTime).toISOString()}`);
  console.log('----------------------------------------------------------------------');

  return next(req).pipe(
    tap({
      next: (event) => {
        // Filter out other lifecycle events and focus only on the HttpResponse
        if (event instanceof HttpResponse) {
          const elapsedTime = Date.now() - startTime;
          console.log(`OK OK [HTTP Response] ${req.url} returned status ${event.status} (${elapsedTime}ms)`);
          console.log('----------------------------------------------------------------------');

        }
      },
      error: (error) => {
        // Log failures
        const elapsedTime = Date.now() - startTime;
        console.error(`XX [HTTP Error] ${req.url} failed with status ${error.status} (${elapsedTime}ms)`);
        console.log('----------------------------------------------------------------------');

      }
    })
  );
};
