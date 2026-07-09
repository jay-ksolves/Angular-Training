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

