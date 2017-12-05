### This template is base on vue-cli webpack template, and modify few place list as below. you can check original version here [vuejs-template](http://vuejs-templates.github.io/webpack/)
- create src/js/ for javascript file
- create src/style/ for scss|scc file
- add sass-loader
- add bootstrap-vue & font-awesome & lodash 
- combine build/ and config/ folder for all config setting
- add vuex
- nightwatch adjust
    - add phantomjs/firefox test
    - add dev test mode to prevent nightwatch restart server during developing
    - add test time on report
---

### Structure
```
├── config/                     # main project & webpack config
├── src/
│   ├── index.html              # index.html template
│   ├── main.js                 # app entry file
│   ├── components/             # ui components (.vue)
│   ├── router/                 # vue-router setting
│   ├── store/                  # vuex setting
│   ├── js/                     # javascript file for common function/variable
│   ├── style/                  # css | scss file
│   └── assets/                 # module assets (processed by webpack)
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── pages/              # for page elements
│   │   ├── reports/            # test report
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
└── package.json                # build scripts and dependencies
```

### Scripts
``` bash
# install dependencies
yarn install
# serve with hot reload at localhost:8080
yarn dev
# build for production with minification
yarn build
# build for production and view the bundle analyzer report
yarn build --report
# run e2e tests (create server by nightwatch)
yarn e2e
yarn e2e:phantom
yarn e2e:ff
# run e2e tests (use dev server when already execute yarn dev)
yarn e2eDev
yarn e2eDev:phantom
yarn e2eDev:ff
# run e2e test by tag
yarn e2eDev -- --tag tagName
#run e2e test by testcase
yarn e2eDev -- --test test/e2e/specs/fileName.js --testcase testcaseName
# run unit tests
yarn unit
# run all tests
yarn test
# clean test reports
yarn cleanReport
```


---
## test1