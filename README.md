# VueJS Quasar Unit and e2e Testing integration

> This project is made using Vuejs 2 Framwork as set of Quasar project


```
## Build Setup

``` bash
# install quasar
$ npm install -g quasar

# install quasar
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# serve production 
$ quasar server

# lint code
$ quasar lint
```

``` 
## Test Setup

``` bash

# install karma-cli 
$ npm install karma-cli -g

# run all test
$ npm quasar test

```


## Project Stucture

``` bash
├── build/                        # webpack config files
│   ├── webpack.test.conf.js      # webpack test config file
│   ├── webpack.base.conf.js      # webpack base config file
│   ├── webpack.dev.conf.js       # webpack dev config file
│   ├── webpack.dev.conf.js       # webpack prod config file
│   └── ...
├── config/                       # main project config
│   ├── index.js
│   └── ...
├── dist/                         # production build 
├── src/
│   ├── api/                      # rest API access endpoint 
│   ├── assets/                   # dynamic assets (processed by webpack)
│   ├── components/               # .vue components
│   ├── data/                     # local data exposed to API 
│   ├── statics/                  # pure static assets (directly copied)
│   ├── state/                    # state managment Vuex feautre
│   ├── themes/                   # themes entry points
│   │   ├── app.ios.styl
│   │   ├── app.mat.styl          
│   │   └── app.variables.styl
│   ├── App.vue                   # root Vue component
│   ├── index.html                # boilerplate for webpack to inject deps
│   ├── main.js                   # app entry file
│   └── router.js                 # app router logic
├── templates/                    # templates for quickly generating components
│   ├── component.vue             # generic .vue component file
│   ├── layout.vue                # generic .vue for a Layout
│   └── view.vue                  # generic .vue for a Page
├── test/                         # .spec.js test entities
│   ├── e2e                       # e2e test 
│   ├── unit                      # unit test
│   │   ├── karma.conf.js         # karma task runner config
│   │   └── ...
├── .babelrc                      # babel config
├── .editorconfig                 # editor config
├── .eslintignore                 # ESlint ignore paths
├── .eslintrc.js                  # ESlint config
├── .gitignore                    # GIT ignore paths
├── package.json                  # npm scripts and dependencies
├── README.md                     # readme for this app
└── .stylintrc                    # Stylus lint config
```


#####Thank you 

