ASBO - angular-sass-boilerplate
========================

Node + Express 4.12.3 + H5BP 5.1 + AngularJS 1.3.15 + Sass + Jasmine 2.3.4 + Karma + Protractor 2.0 + Gulp

Work in progress!

## TODO:

- UI Bootstrap / Foundation Angular / Material Design?
- BackstopJS
- Custom Modernizr
- Gulp nodemon, imagemin, jsdoc, htmllint, sourcemaps
- Build - ng-annotate, minify, gulp-usemin

## Installs

- NodeJS: http://nodejs.org/download/
- Bower
```$ npm install -g bower```
- Karma CLI
```$ npm install -g karma-cli```
- PhantomJS (optional)
```$ npm install -g phantomjs```
- Protractor
```$ npm install -g protractor```
- Selenium webdriver-manager
```$ webdriver-manager update```


## Commands

Start server on http://localhost:3000
```
$ node server
```

Start gulp watch - js, css, karma
```
$ gulp watch
```

### Protractor Commands

Start Selenium webdriver:
```
$ webdriver-manager start
```

To test in phantomJS, start phantomjs and match the port to `seleniumAddress` in protractor conf.js:
```
$ phantomjs --webdriver=5678
```

Run protractor:
```
$ protractor test/e2e/conf.js
```