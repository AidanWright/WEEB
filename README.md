# BWEER/S
###### **Bootstrap + Webpack + Express + Ejs + RethinkDB/SQLite**

[![CircleCI](https://circleci.com/gh/AidanWright/BWEER-S.svg?style=shield)](https://circleci.com/gh/AidanWright/BWEER-S) [![codecov](https://codecov.io/gh/AidanWright/BWEER-S/branch/master/graph/badge.svg)](https://codecov.io/gh/AidanWright/BWEER-S) [![](https://david-dm.org/AidanWright/BWEER-S.svg)](https://david-dm.org/AidanWright/BWEER-S) [![](https://david-dm.org/AidanWright/BWEER-S/dev-status.svg)](https://david-dm.org/AidanWright/BWEER-S?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/AidanWright/BWEER-S/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AidanWright/BWEER-S?targetFile=package.json) [![HitCount](http://hits.dwyl.com/AidanWright/BWEER-S.svg)](http://hits.dwyl.com/AidanWright/BWEER-S)
--
BWEER/S is a modified version of Ben Grunfeld's [Expack](https://github.com/bengrunfeld/expack)--a boilerplate with [ES6+ babel transpilation](https://babeljs.io/docs/en/), [ESLint](https://eslint.org/) linting, [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/), and [Jest test framework](https://jestjs.io/)--that uses [Bootstrap](https://getbootstrap.com/) for easy templating, [Ejs](https://ejs.co/) as the express view engine, and your choice of [RethinkDB](https://rethinkdb.com/) or [SQLite](https://sqlite.org/index.html) as a database.

## Getting Started

BWEER/S has two build modes: Development and Production.

When you run `npm run build:dev`, Javascript, HTML, and CSS files are unminified and not uglified, meaning that you can easily inspect them in Chrome Dev Tools. Hot Module Reloading is enabled via `webpack-dev-middleware` and `webpack-hot-middleware`.

When you run `npm run build:prod`, Javascript, HTML, and CSS files are all minified and uglified, and images are encoded as Base64 directly into your CSS file, which results in less calls to the server for image files.

To start the server run `npm start`, and navigate to `localhost:8080`

### Prerequisites

You will need [Node.js](https://nodejs.org/en/). LTS will work for most users.

### Installing

To install BWEER/S clone the repository and install the node modules:
```
git clone https://github.com/AidanWright/BWEER-S
cd BWEER-S
npm install
```

## Jest

`npm run test` will run Jest. This is run at during every build.

And

`npm run coverage` will generate a coverage report.

### Linting
Eslint uses the rules found in [.eslintrc.js](.eslintrc.js) to lint and does not lint any of the files found in [.eslintignore](.eslintignore)  

`npm run lint` will run Eslint but will **not** fix any mistakes.

And

`npm run lint:fix` will run Eslint and fix the found mistakes. This is run during every production build

## Google App Engine Flex Deployment

Expack can be deployed directly to Google App Engine Flex with the command `npm run deploy`. **IMPORTANT:** Currently `app.yaml` is configured to use minimal resources to save on cost, which is great for development but terrible for production. Please review and update `app.yaml` to suit your own needs.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/AidanWright/BWEER-S/tags).

## Authors

* [**Aidan Wright**](https://github.com/AidanWright)

See also the list of [contributors](https://github.com/AidanWright/BWEER-S/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Again, this would not be possible without Ben Grunfeld and his amazing boilerplate.
