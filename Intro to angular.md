DAY 1
---

### what is angular

- frontend js framework
- SPA framework
- Component based architecture
- Developed and maintained by google

---

### why angular

- Complete FE framework
- Best for large and enterprise app
- fast laoding and dev
- large community
- Type scirpt support

---

### Create project

- check angular cli  -- > ng version
- Create project  --> ng new project_name

- If you want to initialize the Angular project directly in your current directory (angularTraining) rather than creating a new subfolder:

Run the command with a valid project name and use the --directory flag:

`ng new angular-training --directory ./
`

- RUn project  do `ng serve`

---

DAY 2
---

- angular.json:  he master control file for Angular. It defines your build steps, tells Angular where your main index.html is, and is where you add global CSS files or asset paths. - just like next config

- src/main.ts: The entry point. Like index.js, it kicks off the whole app.

- src/app/app.ts: This is your main root component file (the logic class).

- src/app/app.html: This is the global layout file.

- src/app/app.routes.ts: This is where you configure page routing (exactly like file-based routing profiles, but configured as an array).

---

DAY 3
---

```
- ng g c parent
- ng g c child
- ng g c grandchild
```

- (This will automatically create folders for parent, child, and grandchild right inside your src/app/ directory!)

- Interpolation: in the app.ts we write the logic and using interpolation we can display values in app.html

- Property binding: in the app.ts we write the logic and using property binding we can bind properties of an element in app.html

- Event binding: in the app.ts we write the logic and using event binding we can bind events of an element in app.html

- What is a component in angular:  A component is combination of html + typescript +css

- What is interpolation: {{}} - used to display values from typescript to html

- which is the main file in Angualr: in old version  main file were: app.component.ts, app.component.html, app.component.css and now for version 21 its only app.ts, app.html, app.css and app.routes.ts

- Which decorator is used to create a component in angular: @component decorator

- What is the difference between interpolation and property binding: interpolation is used to display values from typescript to html and property binding is used to bind properties of an element in app.html

- which is the root component: app.component.ts

- What is input binding: in the app.ts we write the logic and using input binding we can pass values from parent to child component

- What is output binding: in the app.ts we write the logic and using output binding we can pass values from child to parent component

- what we can write in App.ts: we can write logic, variables, functions, imports, exports, decorators and many more

---

### Angular folder structure

```
angular-training/
├── node_modules/             # 📦 Downloaded libraries and dependencies
├── public/                   # 📁 Public assets (favicon, etc.)
│   └── favicon.ico
├── src/                      # 📁 Source files
│   ├── main.ts               # 🚀 App Entry Point (bootstraps the app)
│   ├── index.html            # 📄 Main HTML file (served to the browser)
│   ├── styles.css            # 🌍 Global Styles
│   └── app/                  # 🏢 Application folder
│       ├── app.config.ts     # ⚙️ Configures routing, providers, and global settings
│       ├── app.routes.ts     # 🧭 Routing Configuration
│       ├── app.ts            # 🏢 Root Component Class (logic)
│       ├── app.html          # 🔤 Root Component HTML Template
│       └── app.css           # 🎨 Root Component CSS Styles
├── .gitignore                # 🙈 Files and directories to ignore in git
├── angular.json              # 🛠️ Angular CLI Config (Build, Serve, Schematics)
├── package.json              # 📦 Scripts and dependencies metadata
└── tsconfig.json             # ⚙️ TypeScript configuration
```

---

### Angular works behind the scene

- Component tree --> hierarchy of components top to bottom (root component at the top and leaf components at the bottom)
- Rendering --> how the components are rendered in the browser -->
    1. find component class ( App.ts where variable and signals are defined) .
    2. find template (App.html where html is there with bindings).
    3. find styles (App.css where styles are defined).
    4. create a view (DOM) and bind the values from component class to the template.
    5. render the view in the browser
- Change detection --> how the components are updated when the data changes -->
    1. find component class .
    2. find template .
    3. find styles .
    4. create a view .
    5. render the view in the browser
   (before angular 21 we have Zones that check each change and hence it drops performance  but in angualr 21 we have signals that imporved the performance significantly that detect change in signals and update that component only)

---

- #### Interpolations (to display output in html view)

  - Rules:
    - We cant do  <p>{{name, age, salary}}</p> but we have to do like <p>{{name}},{{age}},{{salary}}</p>
    - We cant do any logic in interpolation
    - Dont do big function call inside { { } }
    - Dont modify the value inside interpolation
    - unidirectional --> app.ts to app.html not the other way around
    - we can write varibales, simple expression , arithmetic operation inside and function call with simple logic
    - we cant write or do assignment, write arrow functions, loops, complex functions, new keyword, dom access

---

### Angular CLI (`npm install -g @angular/cli`)

- **What is Angular CLI:** CLI stands for Command Line Interface. It is used to initialize, develop, scaffold, build, test, and maintain Angular applications.
- **Check installed version:** `ng version` (checks if Angular CLI is installed and displays environment details)
- **Create a new project:** `ng new project_name`
- **Run the project (Dev server):** `ng serve`
- **Run and open in default browser:** `ng serve --open` or `ng serve -o`
- **Build the project:** `ng build` (compiles the app into an output directory for deployment)
- **Run unit tests:** `ng test`
- **Generate component:** `ng g c component_name` or `ng generate component component_name`
- **Generate component in a specific folder:** `ng g c parent/child` (creates a subfolder `child` inside the `parent` directory)
- **Generate service:** `ng g s service_name` or `ng generate service service_name`
- **Generate service in a specific folder:** `ng g s parent/child` (creates a service inside `parent/` directory)
- **Generate directive:** `ng g d directive_name` or `ng generate directive directive_name`
- **Generate directive in a specific folder:** `ng g d parent/child`
- **Generate pipe:** `ng g p pipe_name` or `ng generate pipe pipe_name`
- **Generate pipe in a specific folder:** `ng g p parent/child`
- **to run on different port:** `ng serve --port 4201`
- **MCP Setup** :`ng mcp add https://mcp.angular.dev/`
- **MCP List:** `ng mcp list`
- **MCP Remove:** `ng mcp remove <server>`

---

#### Component in Angular

- Component name shouldbe in small letter only not in camel case.
- A component is combination of html+typescript+css
- A component is the building block of an Angular application.
- A component consists of three parts:
    1. Template (HTML)
    2. Styles (CSS)
    3. Logic (TypeScript)
    4. Metadata (Decorators)  --> here we define the location liek where s the html file  css file and other components that are used in this component ( it is @Compoent we write), it is must be there in file.
- Types of components:
    1. Stand alone componets ( used now from angualr 14 to 21) - @Component --> Default
    2. Module base components (used before angualr 2 to 13) - @NgModule
- Stand alone component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  ---> used in which html file it will display the component
  standalone: true, ---> it means it is a standalone component
  imports: [], ---> in module base components we have to import the components here
  templateUrl: './app.html', ---> we have all the html of this component here
  styleUrl: './app.css', ---> we have all the css of this component here`
})
export class App {
  readonly title = 'angular-training';
}
```

- Template vs TemplateUrl :
  template is for innnter html that is less than 50 lines and templateurl is for outer/external html that is more than 50 lines
- we can write the html in backticks
- tempalte is like we can write the html in the same app.ts instead of writing in seperat app.html and giving a url in the template url

- styles vs styleurl   and styleUrls: simialr as we have template and tempale url when we want the style in same fiel use use style and when we want the style sin separte then we have the style url
styleUrls --> when multiple styles file we have to give in array `styleUrls:["",""]

---

#### Custom Components

- build own components
- Reuse the component in parent components
- Use Template and TemplateUrl
- Use styles and styleUrl
- Created the TS file
- Mandatory file we have the .ts file in component and make sure  all component name will be in small letter

---

#### Property Binding (represented by array [])

- It sends the typescrpit data to html property.
- when any data is written in typescript component and we want to diplay in html template we can use property binding
- its representation is square bracket []
- any data written in type script and  we want to access it via property of html we have to use property binding
- it is unidirectional
- syntax is : [property]="value"
- usecase:
  - we have mutiple attribut in html like for image src, alt etc... button has diabale then allthese are set used form the proprty binding
  eg: <img [src]="imageUrl" [alt]="altText">

#### Event Binding

- html se event typescript component me function ki tarah call karna
- it is represented by parentheses ()
- syntax is : (event)="function()"
- usecase:
  - we have to call a function from html when an event is triggered
  eg: <button (click)="onClick()">Click Me</button>
- (event)="methodName()"
- $event is used to capture event payload from the html to the ts file
- one way unideirection view to typescipt

---

#### get and set input field value in Angular

- using fn + event
- using $event (event object)
- using template reference variable (#ref)

---

#### Styling in angular

- Component style
- Global Style
- New Global Style File
- internal style
- inline style in component.ts
- multiple css in component

---

#### control flow in Angular in html file

- old we use ngif
- now we have this syntax :

```
@if(condition){
    <!-- true -->
}
@else if(condition){
    <!-- false -->
}
@else{
    <!-- else -->
}
```

---

#### switch in angular

```
@switch(expression){
  @case(value){
    <!-- code -->
  }
  @default{
    <!-- code -->
  }
}
```

---

#### @for in angular

- old we have @ngfor now we have @for
- for loop contextual variable are: $index,$count,$first,$last,$even,$odd
- @empty is used to display the empty value when array is empty
- track is mandatory for @for it helps to track the item
-

```
@for(item of items; track item.id){
  <!-- code -->
}
@empty{
  <!-- empty -->
}
```

---

#### Signals ( in angular 21 ) _ reactive variable

- signals are reactive system for angular that makes angualr fast, simple, more predictable and can detect any change easily, and update only the component that are changed not the all component like before. (in zone)
- singal is similar to useState in react
- syntax:

  ```
  import { signal } from '@angular/core';
  const count = signal(0);
  ```

- why signals:
  - fast rendering : updated that componnet only where signal value is being used.
  - no sync pipe needed TO RUN  , no need of subscribe
  - simple state managemnt
  - predictable ad dependency tracking
  - zoneless
  - we can set data  using signal.set  or signal.update
  - signal is synchronous

- Signals with data types
  - count = signal<number>(0);
  - value = signal<string>("hello");
  - student = signal<{name:string,age:number}>({
        name:"",
        age:0
     })

  - Set --> direlty repalce
  - update --> change

 ---

#### computed signals

    - components updated automatically whenever signal changes that we call computed signals
    - conputed signals isliek pure functions in js
    - there is no sideeffect 
    - computed is same as useMemo 
    -WHY WE use: 
       - derived data
       - avoid recomputation in methods
       - lazy evaluation
       - update component automatically based on the dependecies
       - performace optimization

     - computed is pure func
     - we shuld not call any api inside computed
     - we should not set any value using set or update inside computed because of sideeffects
     

```
const count = signal(1);
const double = computed( () => count * 2);
```

---

#### effect in angular

- effect is used to perform sideeffects in angular
- whenever signal is updated effect automatic runs
- differce between effect adn computed signals is:
  - computed signal isrun over new value where as effect run over value changes  liek rerun the method

- constructor is run berofe any code run
- we use effect when we want like set localstorage or boweer api call or dom access,= or console logging or communicate with components or auto run logics
- cunenrly effect is sync chronus but in comoing time it will be asynchnus
- dont use set or update inside the effect as infiinity loop will run
- run when signal create adn thwn value changes

----

#### xcPipes in Angular

- use to format data in angular without changing the original data
- syntax: value | pipe
- pipe take value and return formatted value

---

#### custom pipe in angular

- crete in pipe folder with this ` ng g pipe pipe/pipeShortName `
- transform basicaly convertsinput to output in pipe cusot pipe we have

 ---

#### signal deep dive

- fine grained reactivity  --> updated only that part in compoent that has singal use rather than whole component
- signal graph  --> track singla like a graph how it is internally
  - graph has
- avoid over rendering

----

#### two way binding

- ui <--> typscript  both direction data sync
- old method : [(ngModel)]
- use [()]

- ngModel we can use with signal aas when ngmodel property chaneg it dont  update the envent signal directly

----

#### forms with signals

- why use signals with forms?
  - when form value udpate ui and state both changes so when signal chaneg then reactive state chanegs and then ui updates so it is fast
-

---

#### Resuseable components

- create resuabel compoent that cna be used
- use signal to pass data to the component
- <ng-content></ng-content> forshowing the conents passing whereit is being used .

---

#### Angualar ROuting app.route.ts

- Routing array is like a list and in that we enter the urls that we need to treat as a routing
syntax:  {path: 'path url', component: Component name}
- router outlet: <routerOutlet></routeroutlet>  this swe need to wite in app.html file where we want to display the routed components like gibing permisonto applcationto show the othe routes
- router link;  <a routerLink='/home'>Home page</a>

- Nested routing , chile routing:

- we sue this this.route.snapshot.  when we have the url staic in cae of dyamnic url we use subcribe to get the value.  without page refresh

---

#### Lazy Loading in Angular

- lazy loading/ load compoent
- in old we have  ngload and loadchildern
- now we haev on 21 load component a single thing rater than multiple
- how to check , got to sources tab of chorme dev tools check the SRC folder  ifany new file apprear when moving to a route names with chunks then  it means that route is lazy loaded component.
- syntax we do in the app route file by {path: 'home', loadComponent: () => import('./home/home').then(m => m.Home)}

---

#### wild card routing or say 404 page

- if in url we enter any url that is not defined in the routing table then it will show the 404 page
- syntax: {path: '**', component: Component name}
- we have to wite this at the end in the routing table

---

#### Route guards

- route protections
- Auth guard ( CanActivate ) - > to check is user loged in or not, block routing when not loged in, redirect to login page, or can activate child components.
- Auth guard (CanDeactivate) - > to check user want to move from the current page or not / if any form left unfilled  then block routing or  ask user for confirmation. just like isDirty in react hook form
- Auth guard (CanLoad) - > to check lazy load component before loading it , if it is false then it will not load the component.
- Auth guard (CanMatch)-->  match or not decide based on condition if it is true then it will allow or false , router will not match that url
- url match strategy
- ng g guard namehere like `ng g guard authGuard`

- ng g guard auth --no-functional      --> Generate a Class-Based Guard
If you explicitly need an old-school class-based guard that implements multiple interfaces at the same time (like both CanActivate and CanDeactivate), you must add the --no-functional flag

- modern versions of Angular default to generating functional guards rather than class-based guards.
Because a functional guard is just a single function (e.g., CanActivateFn), it can only handle one guard type at a time. If you select more than one option in the CLI interactive prompt, it throws that error.

---

#### Navigate API

- use to navigate to the different routes
- syntax: eg:  login(){
  this.router.navigate(['dashboard]);
}

- Navigate has three method :
  1. navigate():
     1. navigate [] --> navigate to the root url
     2. navigate(['path']) --> navigate to the path
     3. navigate(['path' , 'id']) --> navigate to the path with id
     4. navigate(['path' , 'id' , 'name']) --> navigate to the path with id and name
     5. navigate(['path' , {queryParam: 'value'}] --> navigate to the path with query parameter
     6. navigate(['path' , {queryParamsHandling: 'merge'}] --> navigate to the path with query parameter handling
     7. navigate(['path' , {queryParamsHandling: 'preserve'}] --> navigate to the path with query parameter handling
     8. navigate(['path' , {queryParamsHandling: 'never'}] --> navigate to the path with query parameter handling
     9. navigate(['path' , {queryParamsHandling: 'always'}] --> navigate to the path with query parameter handling
     10. navigate(['path' , {preserveFragment: true}] --> navigate to the path with fragment
     11. navigate(['path' , {relativeTo: this.route}] --> navigate to the path with relative route
     12. navigate(['path' , {skipLocationChange: true}] --> navigate to the path without changing the url
     13. navigate(['path' , {replaceUrl: true}] --> navigate to the path with replacing the url
     14. navigate(['path' , {replaceUrl: false}] --> navigate to the path with not replacing the url
     15. navigate(['path' , {relativeTo: this.route,skipLocationChange: true,preserveFragment: true,queryParamsHandling: 'merge'}] --> navigate to the path with all the options

  2. navigateByUrl(url: string , options?: {replaceUrl?:boolean,queryParamsHandling?:''}) --> navigate to the given url
  3. navigateByUrl('/path') --> navigate to the root url
  4. navigateByUrl('/path' , 'id') --> navigate to the path with id
  5. navigateByUrl('/path' , {replaceUrl:true}) --> navigate to the path with replacing the url
  6. navigateByUrl('/path' , {queryParamsHandling:'merge'}) --> navigate to the path with query parameter handling
  7. navigateByUrl('/path' , {preserveFragment:true}) --> navigate to the path with fragment
  8. navigateByUrl('/path' , {relativeTo:this.route}) --> navigate to the path with relative route
  9. navigateByUrl('/path' , {skipLocationChange:true}) --> navigate to the path without changing the url
  10. navigateByUrl('/path' , {replaceUrl:true,queryParamsHandling:'merge',preserveFragment:true,relativeTo:this.route,skipLocationChange:true}) --> navigate to the path with all the options

  11. navigateByUrl(url: string , options?: {replaceUrl?:boolean,queryParamsHandling?:''}) --> navigate to the given url  this wil be a fixed url and not recommned

  navigate and navigateByUrl both are same but navigate use array and navigateByUrl use string

  ---

#### life cycle

- <https://angular.dev/guide/components/lifecycle>

Summary
Creation constructor Standard JavaScript class constructor . Runs when Angular instantiates the component
ngOnInit Runs once after Angular has initialized all the component's inputs.
ngOnChanges Runs every time the component's inputs have changed.
ngDoCheck Runs every time this component is checked for changes.
ngAfterContentInit Runs once after the component's content has been initialized.
ngAfterContentChecked Runs every time this component content has been checked for changes.
ngAfterViewInit Runs once after the component's view has been initialized.
ngAfterViewChecked Runs every time the component's view has been checked for changes.
Rendering afterNextRender Runs once the next time that all components have been rendered to the DOM.
afterEveryRender Runs every time all components have been rendered to the DOM.
Destruction ngOnDestroy Runs once before the component is destroyed.

---

#### rxjs

Operator,What it does?,Why we use it?,Real World Example
map,Changes every value,"To transform data (multiply, format, etc.)","Show price with 18% tax, convert name to uppercase"
filter,Keeps only some values,To remove unwanted data,Show only products with price > 500
debounceTime,Waits before doing something,To avoid too many requests while typing,Search box - wait until user stops typing
switchMap,"Cancels old request, starts new one",To get only latest result (important!),"Search box, autocomplete, changing user selection"
mergeMap,Runs all requests in parallel,"When you want all results, not just the latest",Load multiple images or comments at same time
takeUntil,Stops when something happens,"To stop infinite streams (like counter, timer)",Stop loading data when user leaves the page

map → You get raw data 5, you change it to 50 (like adding tax).
filter → You have numbers 1 to 10, you only want even numbers.
debounceTime → User is typing "Hello World". You don’t want to search after every letter. You wait 800ms after they stop typing.
switchMap → User types "apple", then quickly changes to "mango". You cancel the "apple" search and only search for "mango".
mergeMap → You want to load user details + user posts + user photos at the same time.
takeUntil → You have a live counter. When user clicks "Stop" or leaves the page, stop the counter.

#### Change detection strategy

- Zonejs
**Zone.js, Change Detection Strategies, ChangeDetectorRef, markForCheck & detectChanges in Angular 21**

### 1. What is Zone.js?

**Zone.js** is a library that Angular historically used to automatically trigger change detection.

- It **monkey-patches** browser async APIs (`setTimeout`, Promises, DOM events, `fetch`, HttpClient, etc.).
- Whenever an async operation completes, Zone.js notifies Angular to run **change detection (CD)** on the component tree (top-down).
- **Pros**: Magic — UI updates automatically.
- **Cons**: Performance overhead, larger bundle, harder debugging.

**In Angular 21+**:  
**Zoneless change detection is the default** for new apps. No more Zone.js dependency. Change detection now relies on **explicit notifications**:

- Signal updates (read in templates)
- Template events
- `markForCheck()`
- Input binding changes, `AsyncPipe`, etc.

This results in smaller bundles, better performance, and more predictable behavior.

### 2. Change Detection Strategies

Set via `@Component` decorator:

```ts
changeDetection: ChangeDetectionStrategy.OnPush   // or .Default / .Eager
```

#### ChangeDetectionStrategy.Default (Eager)

- Component is checked **every time** a CD cycle runs.
- Forgiving but less performant.
- In Zoneless: Still eager within triggered cycles.

#### ChangeDetectionStrategy.OnPush (Recommended)

- Skips checking the component/subtree unless it is "dirty".
- Checked when:
  - `@Input()` reference changes (`===` comparison)
  - Event handled inside the component or descendants
  - `markForCheck()` is called
  - Signals used in template update
- **Requires immutability** for best results (new object/array references on changes).

**Note**: OnPush is becoming the default strategy in upcoming versions.

**Example (Immutability)**:

```ts
// Bad with OnPush
this.user.name = 'New';

// Good
this.user = { ...this.user, name: 'New' };
```

### 3. ChangeDetectorRef

Inject it for manual control:

```ts
constructor(private cdr: ChangeDetectorRef) {}
```

#### Key Methods

| Method              | Purpose                                                      | Use Case                              | Scope                     |
|---------------------|--------------------------------------------------------------|---------------------------------------|---------------------------|
| `markForCheck()`    | Marks view + ancestors dirty for **next** CD cycle           | Async operations in OnPush components | Efficient, next cycle     |
| `detectChanges()`   | Runs CD **immediately** on this component + children         | Rare (sync updates)                   | Local subtree only        |
| `detach()`          | Stops automatic checks                                       | Extreme optimization                  | -                         |
| `reattach()`        | Re-enables checks                                            | After detach                          | -                         |

**markForCheck() vs detectChanges()**:

- `markForCheck()` → Schedules for next cycle (most common).
- `detectChanges()` → Runs immediately (more expensive).

### 4. Example: OnPush + HTTP

```ts
@Component({
  selector: 'my-comp',
  template: `...`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  data: any;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  loadData() {
    this.http.get('/api/data').subscribe(result => {
      this.data = result;
      this.cdr.markForCheck();   // Important for OnPush
    });
  }
}
```

**Modern Alternative**: Use **Signals** — often eliminates need for `ChangeDetectorRef`.

```ts
data = signal<any>(null);
// Template: {{ data() }} → Auto-updates
```

### 5. Best Practices (Angular 21+ Zoneless)

- Prefer **Signals** for state management.
- Use **OnPush** on presentational components and large lists.
- Treat inputs as immutable.
- Use `AsyncPipe` in templates.
- Minimize manual `ChangeDetectorRef` usage.
- Test thoroughly when migrating legacy apps.

### Quick Comparison

| Aspect                  | Default + Zone.js          | OnPush + Zone.js             | Zoneless (Angular 21+)          |
|-------------------------|----------------------------|------------------------------|---------------------------------|
| CD Trigger              | Every async event          | Inputs + events + manual     | Explicit (Signals, markForCheck)|
| Performance             | Baseline                   | Good                         | Best                            |
| Immutability            | Not required               | Strongly recommended         | Recommended with OnPush         |
| Bundle Size             | Larger                     | Same                         | Smaller                         |

---

---

### DAY 27: State Management with NgRx

---
**NgRx** is a state management library for Angular, based on Redux. It provides a single source of truth for your application's state.

#### 1. Core Concepts

- **Store**: The single object that holds the state of the entire application.
- **Actions**: Events dispatched to express a desire to change state (e.g., "Add Task").
- **Reducers**: Pure functions that receive the current state and an action, returning a new state.
- **Selectors**: Pure functions used to select, format, and slice pieces of state from the store.
- **Effects**: Side-effect model that listens for actions, performs async tasks (like API calls), and returns new actions.
- **DevTools**: Browser extension to inspect and time-travel state changes.

#### 2. Task Manager Example (NgRx Store Setup)

**A. Define Actions (`task.actions.ts`)**

```typescript
import { createAction, props } from '@ngrx/store';

export const addTask = createAction('[Task] Add Task', props<{ title: string }>());n
export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());
```

**B. Define Reducer (`task.reducer.ts`)**

```typescript
import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask } from './task.actions';

export interface Task {
  id: number;
  title: string;
}

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { title }) => ({
    ...state,
    tasks: [...state.tasks, { id: Date.now(), title }]
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  }))
);
```

**C. Define Selectors (`task.selectors.ts`)**

```typescript
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state) => state.tasks
);
```

**D. Usage in Component (`task.component.ts`)**

```typescript
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTasks } from './task.selectors';
import { addTask, deleteTask } from './task.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [AsyncPipe],
  template: `
    <input #taskInput type="text" placeholder="New Task" />
    <button (click)="add(taskInput.value); taskInput.value=''">Add Task</button>

    <ul>
      @for (task of tasks$ | async; track task.id) {
        <li>
          {{ task.title }} 
          <button (click)="delete(task.id)">X</button>
        </li>
      }
    </ul>
  `
})
export class TaskComponent {
  private store = inject(Store);
  tasks$ = this.store.select(selectAllTasks);

  add(title: string) {
    if (title.trim()) this.store.dispatch(addTask({ title }));
  }

  delete(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}
```

---

### DAY 28: State Management Alternatives & NgRx vs Signals

---

#### 1. State Management Alternatives Overview

- **Component Store**: Lightweight library from NgRx for managing local component state (alternative to global NgRx Store).
- **Akita / NGXS**: Alternative state management libraries using Object-Oriented/Class-based decorators (simpler learning curve than boilerplate-heavy NgRx).
- **Signals-based State**: Managing state natively using Angular's reactive Signals (`signal`, `computed`) without any third-party library.

#### 2. NgRx vs Signals Comparison

| Feature | Global NgRx | Natively using Signals |
|---|---|---|
| **Boilerplate** | High (Requires Actions, Reducer, Selector, Store setup) | Extremely Low (Only standard TypeScript variables and Signals) |
| **Complexity** | Best for large enterprise apps with complex state workflows | Best for simple/medium state, local state, and direct reactive updates |
| **Reactivity** | Observable-based (requires RxJS subscription / AsyncPipe) | Signal-based (synchronous, direct template value execution) |

#### 3. Signals State Example (Same Task Feature)

**State Service (`task-signal.service.ts`)**

```typescript
import { Injectable, signal, computed } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

@Injectable({ providedIn: 'root' })
export class TaskSignalService {
  // Define State
  private state = signal<{ tasks: Task[] }>({ tasks: [] });

  // Read state reactively
  tasks = computed(() => this.state().tasks);

  // Actions/Mutations
  addTask(title: string) {
    this.state.update(curr => ({
      ...curr,
      tasks: [...curr.tasks, { id: Date.now(), title }]
    }));
  }

  deleteTask(id: number) {
    this.state.update(curr => ({
      ...curr,
      tasks: curr.tasks.filter(task => task.id !== id)
    }));
  }
}
```

**Component Usage (`task-signals.component.ts`)**

```typescript
import { Component, inject } from '@angular/core';
import { TaskSignalService } from './task-signal.service';

@Component({
  selector: 'app-task-signals',
  template: `
    <input #taskInput type="text" placeholder="New Task" />
    <button (click)="taskService.addTask(taskInput.value); taskInput.value=''">Add</button>

    <ul>
      @for (task of taskService.tasks(); track task.id) {
        <li>
          {{ task.title }}
          <button (click)="taskService.deleteTask(task.id)">X</button>
        </li>
      }
    </ul>
  `
})
export class TaskSignalsComponent {
  protected taskService = inject(TaskSignalService);
}
```

---

### DAY 29: Internationalization (i18n) & Accessibility (a11y)

---

#### 1. Internationalization (i18n) 🌍

Angular has built-in support to translate your app into multiple languages.

- **`i18n` Attribute**: Mark text in templates for translation.

  ```html
  <h1 i18n>Hello World</h1>
  ```

- **Custom ID & Description**: Help translators by providing context.

  ```html
  <h1 i18n="User greeting|Greeting at the homepage@@homeGreeting">Hello World</h1>
  ```

- **Translation Workflow**:
  1. Run `ng extract-i18n` to generate a `.xlf` translation source file.
  2. Translate the text inside the `.xlf` file.
  3. Configure build options in `angular.json` for different locales.

#### 2. Accessibility (a11y) ♿

Ensure your application can be used by everyone, including users with screen readers.

- **ARIA Roles & Attributes**: Tell screen readers what elements do.

  ```html
  <button aria-label="Close dialog" (click)="close()">X</button>
  ```

- **Accessible Forms**: Always pair labels with inputs using `id` and `for`.

  ```html
  <label for="username">Username:</label>
  <input id="username" type="text" aria-required="true" />
  ```

- **Active Element & Focus**: Use `cdkTrapFocus` from Angular CDK to keep keyboard focus inside modals/dialogs.
- **a11y Audit**: Use tools like **Lighthouse** (built into Chrome DevTools) or **axe-core** to scan your app for accessibility issues.

```



#### Security: 
- Angular has great built-in protections,
- import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

- Available Sanitizers:

bypassSecurityTrustHtml()
bypassSecurityTrustUrl()
bypassSecurityTrustResourceUrl() (for iframes, videos)


- . XSS Protection (Cross-Site Scripting)
Angular’s Default Protection:

{{ interpolation }} → automatically escaped
[innerHTML] → sanitized unless you use DomSanitizer

Bad Practice:
HTML<div [innerHTML]="userComment"></div>   <!-- Dangerous if userComment comes from user -->
Better:
TypeScriptthis.safeComment = this.sanitizer.sanitize(SecurityContext.HTML, userComment);



- CSRF Protection (Cross-Site Request Forgery)
Angular has built-in support.
Setup (Standalone - Angular 21):
In app.config.ts:
TypeScript

````
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',     // backend must set this cookie
        headerName: 'X-XSRF-TOKEN'
      })
    )
  ]
};

````
Backend should:

Set XSRF-TOKEN cookie on login
Expect X-XSRF-TOKEN header on state-changing requests (POST, PUT, DELETE)


5. Other Important Security Practices

PracticeHow to do it
Http InterceptorAdd auth token, logging, error handling
Strict ModeEnable in tsconfig.json: "strict": true, "strictTemplates": true
Route GuardsProtect admin routes with CanActivate
Environment VariablesNever put API keys in frontend code
Content Security Policy (CSP)Add meta tag or server header
