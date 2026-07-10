# AngularJS (v1.x) to Modern Angular (v21/v22) Migration & Learning Guide

Welcome to Modern Angular! This guide is designed specifically for developers transitioning from legacy AngularJS (v1.x) to modern Angular (v21/v22). We will map your existing AngularJS knowledge directly to modern concepts, break down the 11 core migration topics, and explore the unique architectural needs of Chrome Extensions.

---

## 1. The Mental Model Shift: AngularJS vs. Modern Angular

In AngularJS, your application was built around **Controllers**, **$scope**, and **Modules**. Reactivity was implicit—when you changed a value on `$scope`, AngularJS ran a "Digest Cycle" that checked every watcher on the page to update the DOM.

In Modern Angular, the architecture is **Component-Based** and **Type-Safe** (TypeScript). Data flows explicitly, and reactivity is handled via fine-grained mechanisms (Signals & RxJS) rather than scanning the entire application DOM.

| Concept | AngularJS (v1.x) | Modern Angular (v21/v22) |
| :--- | :--- | :--- |
| **Component Unit** | Controller + HTML Template | Standalone Component (`@Component` TS Class + HTML + CSS) |
| **State Holder** | `$scope` / `controllerAs` (bind to `this`) | TypeScript Class properties (or reactive `signal()` variables) |
| **Reactivity** | Dirty checking ($digest cycle / `$scope.$watch`) | Signals (push-based fine-grained reactivity) & RxJS Observables |
| **Modularity** | `angular.module('myApp', [])` | Standalone imports (no modules needed for standard development) |
| **Syntax Language** | JavaScript (ES5) | TypeScript (Strict types, classes, decorators) |
| **Compilation** | Just-In-Time (JIT) in the browser | Ahead-Of-Time (AOT) compiler during build |

---

## 2. Structural & Syntax Blueprint (Old vs. New)

### Bootstrapping

In AngularJS, you bootstrapped using `ng-app` in your HTML or `angular.bootstrap()`. In Modern Angular, bootstrapping is handled in a TypeScript entry file (`main.ts`) using `bootstrapApplication()`.

#### AngularJS Bootstrapping
```html
<!-- index.html -->
<html ng-app="myApp">
  <body ng-controller="MainController">
    <h1>{{ message }}</h1>
  </body>
</html>
```

#### Modern Angular Bootstrapping
```typescript
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```

### Component Definition

In AngularJS, components were often written as controllers. In Modern Angular, components are `@Component` decorated TypeScript classes with metadata.

#### AngularJS Controller & Template
```javascript
// app.js
angular.module('myApp', [])
.controller('UserCardController', function($scope) {
  $scope.username = 'Jay';
  $scope.greet = function() {
    alert('Hello ' + $scope.username);
  };
});
```
```html
<!-- user-card.html -->
<div>
  <h3>User: {{ username }}</h3>
  <button ng-click="greet()">Greet</button>
</div>
```

#### Modern Angular Standalone Component
```typescript
// user-card.ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div>
      <h3>User: {{ username() }}</h3>
      <button (click)="greet()">Greet</button>
    </div>
  `
})
export class UserCardComponent {
  username = signal('Jay'); // Reactive Signal state

  greet() {
    alert('Hello ' + this.username());
  }
}
```

---

## 3. Deep Dive into the 11 Core Migration Topics

### Topic 1: RxJS (Reactive Extensions for JavaScript)
RxJS is a library for composing asynchronous and event-based code using observable sequences. 

*   **In AngularJS:** Asynchrony was handled using Promises via the `$q` service or plain callbacks. Reactivity was passive.
*   **In Modern Angular:** RxJS `Observable` streams are the backbone of event handling, routing, HTTP responses, and form value changes.
*   **Why it matters:** Unlike Promises which emit once and stop, Observables can emit multiple values over time (like a WebSocket or user typing events).

```typescript
// Modern Angular: Declaring a stream that emits values over time
import { Observable, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Emits even numbers multiplied by 10 every second
const numberStream$: Observable<number> = interval(1000).pipe(
  filter(num => num % 2 === 0),
  map(num => num * 10)
);

// To consume an observable in code:
const sub = numberStream$.subscribe(value => console.log(value));
// Always remember to unsubscribe to avoid memory leaks:
// sub.unsubscribe();
```

---

### Topic 2: Signals
Signals represent a new reactivity model introduced to make Angular faster and simpler by avoiding Zone.js dirty checking.

*   **In AngularJS:** You bound variables to `$scope` and listened with `$scope.$watch()`. If external changes occurred, you called `$scope.$apply()`.
*   **In Modern Angular:** A Signal is a wrapper around a value that notifies consumers when that value changes.
*   **Key Concept:** Signals are synchronous reactive primitives. They don't replace RxJS (which is for asynchronous event streams) but replace simple component state management.

| Feature | AngularJS ($scope + $watch) | Modern Angular (Signals) |
| :--- | :--- | :--- |
| **Declare State** | `$scope.count = 0;` | `count = signal(0);` |
| **Read Value** | `{{ count }}` | `{{ count() }}` (read via function execution) |
| **Update State** | `$scope.count = 5;` | `count.set(5);` or `count.update(n => n + 1);` |
| **Derived State** | Manually re-assign in `$watch` | `double = computed(() => this.count() * 2);` |
| **Side Effects** | `$scope.$watch('count', fn);` | `effect(() => console.log(this.count()));` |

```typescript
// Modern Angular Signal Component example
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button (click)="increment()">Clicked {{ count() }} times</button>
    <p>Double: {{ doubleCount() }}</p>
  `
})
export class CounterComponent {
  count = signal(0); // 1. Readable & writable reactive state
  doubleCount = computed(() => this.count() * 2); // 2. Auto-updates when count changes

  constructor() {
    // 3. Side-effects (runs automatically when count changes)
    effect(() => {
      console.log(`The count is now: ${this.count()}`);
    });
  }

  increment() {
    this.count.update(c => c + 1);
  }
}
```

---

### Topic 3: Directives & Control Flow
Directives attach custom behavior to elements. AngularJS directives combined templates, styling, and controllers; modern Angular separates directives (no template) from components (has template).

*   **In AngularJS:** Structural directives (`ng-if`, `ng-repeat`, `ng-switch`) were placed directly in HTML attributes.
*   **In Modern Angular:** Control flow uses a clean `@` syntax (`@if`, `@for`, `@switch`) compiled directly into optimized JS code.

#### Comparison: Repeating lists & Conditionals

**AngularJS Template (`ng-repeat` & `ng-if`):**
```html
<div ng-if="items.length > 0">
  <ul>
    <li ng-repeat="item in items track by item.id">
      {{ item.name }} (index: {{$index}})
    </li>
  </ul>
</div>
<div ng-if="items.length === 0">
  No items found.
</div>
```

**Modern Angular Template (`@if` & `@for`):**
```html
@if (items().length > 0) {
  <ul>
    @for (item of items(); track item.id; let idx = $index) {
      <li>{{ item.name }} (index: {{ idx }})</li>
    }
  </ul>
} @else {
  <p>No items found.</p>
}
```
> [!NOTE]
> The `track` expression is mandatory in `@for`. It helps Angular's rendering engine know exactly which items in a list were modified, added, or deleted, dramatically improving rendering performance.

---

### Topic 4: Lifecycle Hooks
Lifecycle hooks give you entry points to run setup or cleanup code at key moments in a component's existence.

*   **In AngularJS:** Controllers used `$onInit`, `$onChanges`, `$doCheck`, and `$onDestroy`.
*   **In Modern Angular:** You implement specific lifecycle interfaces on your component class.

| Hook Purpose | AngularJS | Modern Angular | Description |
| :--- | :--- | :--- | :--- |
| **Initialization** | `$onInit()` | `ngOnInit()` | Called once after input properties are initialized. |
| **Input Changes** | `$onChanges(changes)` | `ngOnChanges(changes)` | Called when `@Input` data-bound properties change. |
| **Custom Checks** | `$doCheck()` | `ngDoCheck()` | Run custom change detection checks manually. |
| **Destruction** | `$onDestroy()` | `ngOnDestroy()` | Cleanup subscriptions, event listeners, and timers. |
| **Post-Render** | *None* | `afterRender()` / `afterNextRender()` | Run code after the DOM is rendered (SSR safe). |

```typescript
// Modern Angular Lifecycle Hooks
import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({ selector: 'app-child', standalone: true, template: `...` })
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() userId!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId']) {
      console.log('userId changed to:', changes['userId'].currentValue);
    }
  }

  ngOnInit(): void {
    console.log('Component initialized');
  }

  ngOnDestroy(): void {
    console.log('Component destroyed, cleaning up...');
  }
}
```

---

### Topic 5: Hybrid Applications (`ngUpgrade`)
For large projects, converting the entire application overnight is impossible. The `@angular/upgrade` library lets you run AngularJS and Modern Angular concurrently.

*   **How it works:** You run both frameworks in the same application. AngularJS manages one part of the DOM, while Modern Angular manages another. They can communicate directly.
*   **Core Concepts:**
    *   **Upgrading:** Making an AngularJS service or component available to Modern Angular.
    *   **Downgrading:** Making a Modern Angular service or component available to AngularJS.

```typescript
// Example: Downgrading a Modern Angular Component to be used in AngularJS
import { directive } from '@angular/upgrade/static';
import { Component } from '@angular/core';
import * as angular from 'angular'; // AngularJS typings

@Component({
  selector: 'app-new-counter',
  standalone: true,
  template: `<p>New Angular Component</p>`
})
export class NewCounterComponent {}

// Registering the modern component with the legacy AngularJS module:
angular.module('legacyApp')
  .directive(
    'appNewCounter', 
    directive({ component: NewCounterComponent }) as angular.IDirectiveFactory
  );
```

---

### Topic 6: HTTP Client
Making web requests to server endpoints.

*   **In AngularJS:** The `$http` service returned a `$q` Promise.
*   **In Modern Angular:** The `HttpClient` service returns RxJS Observables, giving you native stream-handling capabilities.

#### AngularJS `$http`
```javascript
$http.get('/api/users')
  .then(function(response) {
    $scope.users = response.data;
  }, function(error) {
    console.error(error);
  });
```

#### Modern Angular `HttpClient`
```typescript
import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    @for (user of users(); track user.id) {
      <p>{{ user.name }}</p>
    }
  `
})
export class UsersComponent implements OnInit {
  private http = inject(HttpClient); // Inject the HTTP service
  users = signal<any[]>([]);

  ngOnInit() {
    this.http.get<any[]>('/api/users')
      .subscribe({
        next: (data) => this.users.set(data),
        error: (err) => console.error(err)
      });
  }
}
```

---

### Topic 7: Forms in Angular
Handling user inputs and form validation.

*   **In AngularJS:** You relied heavily on two-way data-binding (`ng-model`) and HTML attributes for validation (e.g. `required`, `ng-maxlength`).
*   **In Modern Angular:** You have two options:
    1.  **Template-Driven Forms:** Similar to AngularJS, uses directives like `ngModel` directly in HTML templates.
    2.  **Reactive Forms (Preferred):** Fully model-driven, programmatic structure. The form architecture is defined in your TS file. This provides greater control, testability, and reactive streams for user changes.

#### Modern Angular Reactive Form Example
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Mandatory for reactive forms
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input formControlName="email" type="email" placeholder="Enter Email">
      
      @if (profileForm.get('email')?.invalid && profileForm.get('email')?.touched) {
        <small style="color: red;">Email is invalid.</small>
      }
      
      <button type="submit" [disabled]="profileForm.invalid">Submit</button>
    </form>
  `
})
export class ProfileFormComponent {
  // Programmatic definition of form inputs & validation rules
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
```

---

### Topic 8: Dependency Injection (DI)
Dependency Injection is how classes receive reference dependencies (like services) rather than creating them manually.

*   **In AngularJS:** Injection was string-based, usually resolved via array annotations or parameters: `controller('MyCtrl', ['$http', function($http) {}])`. If code was minified without `ng-annotate`, the names broke and caused run-time errors.
*   **In Modern Angular:** DI is backed by TypeScript types. You declare dependencies in the constructor or use the modern `inject()` function.

#### Comparing the modern options

**Constructor Injection:**
```typescript
import { Injectable, Component } from '@angular/core';

@Injectable({ providedIn: 'root' }) // Declares service is available globally
export class LogService {
  log(msg: string) { console.log(msg); }
}

@Component({ selector: 'app-test', standalone: true, template: '' })
export class TestComponent {
  constructor(private logService: LogService) {
    this.logService.log('Component initialized via constructor DI!');
  }
}
```

**`inject()` Function (Preferred in Modern Angular):**
```typescript
import { Component, inject } from '@angular/core';
import { LogService } from './log.service';

@Component({ selector: 'app-test', standalone: true, template: '' })
export class TestComponent {
  // Injecting without constructor: cleaner inheritance and configuration
  private logService = inject(LogService);

  constructor() {
    this.logService.log('Component initialized via inject() function!');
  }
}
```

---

### Topic 9: Routing
Managing navigation paths in Single Page Apps.

*   **In AngularJS:** Usually handled by external libraries like `ui-router` (using state trees and `$stateProvider`) or `$route` (`ngRoute`).
*   **In Modern Angular:** The framework includes a robust, built-in `@angular/router` engine.

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { 
    path: 'admin', 
    loadComponent: () => import('./admin/admin').then(m => m.AdminComponent) // Lazy loading!
  }
];
```

To display the routed components in your root template:
```html
<!-- app.html -->
<nav>
  <a routerLink="/">Home</a> | 
  <a routerLink="/profile">Profile</a>
</nav>
<router-outlet></router-outlet> <!-- Renders active route -->
```

---

### Topic 10: Interceptors
Interceptors sit between your HTTP requests and the server, letting you modify requests (e.g. adding tokens) or inspect responses (e.g. logging status codes).

*   **In AngularJS:** Configured via factories registered on `$httpProvider.interceptors`.
*   **In Modern Angular:** Configured via lightweight, standalone Functional Interceptors.

```typescript
// Modern Angular: Functional HTTP Interceptor
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth_token');

  // Clone request to add the Authorization header
  const authReq = token 
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) 
    : req;

  // Pass request to the next handler in the chain
  return next(authReq);
};
```

Configure it in your global setup:
```typescript
// src/app/app.config.ts
import { ApplicationConfig, provideHttpClient, withInterceptors } from '@angular/core';
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]) // Registers interceptors functional stream
    )
  ]
};
```

---

### Topic 11: Auth Guards
Auth Guards prevent unauthorized users from accessing specific routes.

*   **In AngularJS:** Handled by listening to the `$stateChangeStart` event on ui-router and canceling transitions.
*   **In Modern Angular:** Implemented as a functional guard (`CanActivateFn`) registered on route definitions.

```typescript
// Modern Angular: Functional Route Guard
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Grant access
  } else {
    // Redirect to login page and deny navigation
    return router.parseUrl('/login');
  }
};
```

Attach to a route:
```typescript
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];
```

---

## 4. Chrome Extension Migration: AngularJS to Modern Angular

Migrating Chrome Extensions from AngularJS to Modern Angular brings specific architectural considerations, largely due to Chrome's migration to **Manifest V3 (MV3)**.

### 1. Manifest V3 & The Background Service Worker
*   **The Issue:** MV2 extensions allowed long-lived background HTML pages. AngularJS background scripts kept in-memory state indefinitely. MV3 bans background pages, replacing them with **Service Workers** which are completely ephemeral—Chrome will terminate them when inactive and spin them up again when events trigger.
*   **The Strategy:** Do not bootstrap a full Angular application in your background service worker. Make the service worker a lightweight TypeScript script that listens to browser events, handles API triggers, and updates local storage.

### 2. Content Security Policy (CSP) & Angular Ahead-Of-Time (AOT) Compilation
*   **The Issue:** AngularJS compiles templates dynamically in the browser at runtime using dynamic expression evaluation. This requires setting the CSP `unsafe-eval` flag. Under Manifest V3, **`unsafe-eval` is strictly forbidden**. Standard AngularJS extensions cannot run in MV3.
*   **The Strategy:** Modern Angular (v2+ / v21+) is built around **Ahead-Of-Time (AOT) compilation**. All HTML templates are compiled into static JS classes during build time (`ng build`). At runtime, no dynamic scripting occurs. This makes Modern Angular naturally compliant with MV3 CSP.

### 3. Content Scripts & Shadow DOM Injection
*   **The Issue:** Content scripts inject UI overlays or frames into standard web pages. If you inject Angular components directly, the host web page's CSS can corrupt your extension's style, and vice versa.
*   **The Strategy:** Use Shadow DOM encapsulation. Modern Angular supports Shadow DOM natively by configuring `encapsulation: ViewEncapsulation.ShadowDom` inside your component decorator. 
*   Alternatively, compile your content script components as Web Components using **`@angular/elements`**:

```typescript
// content-script-bootstrap.ts
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ExtensionOverlayComponent } from './overlay.component';

createApplication({ providers: [] })
  .then(appRef => {
    // 1. Convert modern Angular component into a native Custom Element (Web Component)
    const el = createCustomElement(ExtensionOverlayComponent, { injector: appRef.injector });
    
    // 2. Register it as a custom browser element
    customElements.define('my-extension-overlay', el);
    
    // 3. Inject it into the page
    const container = document.createElement('my-extension-overlay');
    document.body.appendChild(container);
  });
```

### 4. Build Configuration (`angular.json` customization)
*   **The Issue:** The default Angular CLI build outputs bundled scripts with cache-busting hashes (like `main.ad824a73.js`). Chrome Extensions expect static paths declared inside the `manifest.json` file (e.g., `"service_worker": "background.js"`).
*   **The Strategy:** Configure your Angular target build options inside `angular.json` to disable name hashing, or create a simple post-build script that renames the main chunks to static scripts like `content.js` and `popup.js`.

Inside your `angular.json` build configurations:
```json
"configurations": {
  "production": {
    "outputHashing": "none" // Turn off random hash codes in filenames
  }
}
```

### 5. Ephemeral State Management in Chrome Extensions
*   **The Issue:** If your popup or background script runs a service containing user data, that data will vanish when the popup closes or the background service worker goes to sleep.
*   **The Strategy:** Bind your Angular services/Signals to `chrome.storage.local` to store state across instances.

```typescript
// Modern Angular Service wrapping chrome.storage.local
import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExtensionSettingsService {
  // Signal state
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    // Load initial setting
    chrome.storage.local.get(['theme'], (result) => {
      if (result['theme']) {
        this.theme.set(result['theme']);
      }
    });

    // Auto-save setting to extension storage whenever the signal updates
    effect(() => {
      chrome.storage.local.set({ theme: this.theme() });
    });
  }
}
```

---

## 5. Step-by-Step Migration Roadmap

When starting your migration, follow this sequence:

1.  **Preparation:** Re-factor your AngularJS code base to use the `controllerAs` syntax and separate components. Avoid `$scope` references where possible to ease conversion to TypeScript properties.
2.  **Initialize Project:** Create a fresh Modern Angular workspace using the CLI: `ng new my-new-extension`.
3.  **Setup Shared Layer:** If you are migrating step-by-step, integrate `@angular/upgrade`.
4.  **AOT Build Checks:** Ensure you are building with AOT enabled (`"aot": true` in `angular.json`) and output hashing disabled for Chrome Extension entry points.
5.  **Refactor Services:** Migrate your AngularJS services to Modern Angular services first using constructor injection or `inject()`. 
6.  **Migrate Components:** Convert templates to modern control flow (`@if`, `@for`), and replace component state with Signals.
7.  **Setup routing & interceptors:** Setup the Modern Router and define functional interceptors for network requests.
