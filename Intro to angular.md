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

- 