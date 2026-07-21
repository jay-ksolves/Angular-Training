import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './interceptors/logger-interceptor';
import { errorHandlingInterceptor } from './interceptors/error-handling-interceptor';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { cartReducer } from './state/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([loggerInterceptor, errorHandlingInterceptor])),

    provideStore({
      cart: cartReducer,
    }),

    provideEffects([]),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
};
