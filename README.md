# Angular testing using JEST

1. Remove any reference to Jasmine / Karma in the package.json
```
npm remove @types/jasmine
 jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

2. Install Jest
```
npm install --save-dev jest jest-preset-angular @types/jest
```

3. Create the ```setup-jest.ts``` in the root folder of the project and the content is as follows
```setup-jest.ts
import 'jest-preset-angular/setup-jest';
```

4. Add in the package.json, the Jest configuration
```package.json
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
```


5. Configure JEST in tsconfig.json and tsconfig.spec.json
```tsconfig.json
"types": [
  "jest"
]
```

6. Configure the commands to run the tests in the package.json
```package.json
"test": "jest",
"test:watch": "jest --watchAll",
"test:coverage": "jest --coverage",
```

7. Remove karma.config.js and test.ts file

8. Remove the test target inside the angular.json file.
```
"test": {
  "builder": "@angular-devkit/build-angular:karma",
  "options": {
    "main": "src/test.ts",
    "polyfills": "src/polyfills.ts",
    "tsConfig": "tsconfig.spec.json",
    "karmaConfig": "karma.conf.js",
    "assets": [
      "src/favicon.ico",
      "src/assets"
    ],
    "styles": [
      "src/styles.css"
    ],
    "scripts": []
  }
}
```

