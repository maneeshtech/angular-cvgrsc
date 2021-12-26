# angular-iratgy

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-iratgy)

Steps to Setup the Angular development environment:
---------------------
1. Download and Install node (node comes with npm) (website: https://nodejs.org/en)
<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/2.3.1_nodejs.png" alt="nodejs website" title="nodejs website" width="600" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Nodejs website - https://nodejs.org/en</figcaption>
  </figure>
</p>

2. After installation check version of node and npm by command: `node -v` / `node --version` OR `npm -v` / `npm --version`
3. Install Angular CLI (website https://cli.angular.io/) by using command: `npm install -g @angular/cli` (it will install Angular CLI globally)

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/2.3.2_angular_cli.png" alt="Angular CLI website" title="Angular CLI website" width="600" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular CLI website - https://cli.angular.io/</figcaption>
  </figure>
</p>

4. After installation check version of angular CLI by using the command: `ng -v` OR `ng --version`, you can also verify angular CLI installation by command: `ng` OR `ng --help`
5. Create a new app with angular CLI by using syntax: `ng new project/appName` example: command: `ng new angular6-1-demo`
6. Go inside the project/app directory, command: `cd angular6-1-demo`
7. Build and run Angular App, command: `ng serve` OR `ng serve -o` OR `ng serve --open`
8. Go to the browser and launch/check Angular App by entering the web address: `localhost:4200`

Commonly / widely used node/npm commands:
---------------------
- to get Node version, type command: `node -v`  OR `node --version`
- to get NPM version, type command: `npm -v`  OR `npm --version`
- to install Angular CLI, type command: `npm install -g @angular/cli`
- to get angular CLI version, type command: `ng -v` OR `ng --version` (this command displays details of a node, npm, and other angular package versions)
- to get various angular CLI commands, type command: `ng` OR `ng --help` 

Dependencies Versions:
----------------------

    "@angular/animations": "^13.1.1",
    "@angular/cdk": "13.1.1",
    "@angular/common": "^13.1.1",
    "@angular/compiler": "^13.1.1",
    "@angular/core": "^13.1.1",
    "@angular/forms": "^13.1.1",
    "@angular/material": "^13.1.1",
    "@angular/material/dialog": "*",
    "@angular/platform-browser": "^13.1.1",
    "@angular/platform-browser-dynamic": "^13.1.1",
    "@angular/router": "^13.1.1",
    "@types/chart.js": "^2.9.35",
    "core-js": "^3.20.1",
    "igniteui-angular": "^13.0.5",
    "igniteui-angular-charts": "^13.1.0",
    "igniteui-angular-core": "13.1.0",
    "rxjs": "^7.4.0",
    "ts-loader": "^9.2.6",
    "tslib": "^2.3.1",
    "typescript": "^4.5.4",
    "webpack": "^5.0.0",
    "zone.js": "^0.11.4"
