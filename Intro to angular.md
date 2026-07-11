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

#### Pipes in Angular

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

# Angualar ROuting app.route.ts

- Routing array is like a list and in that we enter the urls that we need to treat as a routing
syntax:  {path: 'path url', component: Component name}
- router outlet: <routerOutlet></routeroutlet>  this swe need to wite in app.html file where we want to display the routed components like gibing permisonto applcationto show the othe routes
- router link;  <a routerLink='/home'>Home page</a>

- Nested routing , chile routing:
