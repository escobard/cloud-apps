# End to End

## Introduction

The purpose of the End-to-End(e2e) application is to run e2e tests against the UI, to validating product readiness
 prior to deployment.

## Quickstart

### With npm

In your terminal, from the parent directory:

1. `cd api`
2. `npm install`
3. `npm start`

### With npm & Docker

In your terminal, from the parent directory:

1. `cd api`
2. `npm run docker`

## Usage - Expanded 

### Nightwatch Tests

#### Globals 

All tests rely on global variables initiated at test runtime, found at [`e2e/nightwatch.global.js`](https://github.com/escobard/create-app/blob/master/e2e/nightwatch.global.js)

Constants for global use are initiated globally at test runtime and live within [`e2e/constants`](https://github.com/escobard/create-app/tree/master/e2e/constants)

#### Page Objects

Page objects are imported into the [`e2e/nightwatch.global.js`](https://github.com/escobard/create-app/blob/master/e2e/nightwatch.global.js) from [`e2e/screens`](https://github.com/escobard/create-app/blob/master/e2e/screens).

#### Tests

Tests leverage [`jest`](https://jestjs.io/), [`@testing-library/nightwatch`](https://github.com/testing-library/nightwatch-testing-library) and [`page objects`](https://nightwatchjs.org/guide/working-with-page-objects/). All tests are found within [`e2e/tests`](https://github.com/escobard/create-app/blob/master/e2e/tests)

Tests are divided into 3 types: `smoke`, `happy`, `sad`.

### Jest

[Jest](https://jestjs.io/) is utilized as the `test runner` for this application, boilerplated from [the official jest
 / nightwatch POC](https://github.com/mucsi96/nightwatch-api/tree/master/packages/jest-example).

[`e2e/jest.config.js`](https://github.com/escobard/create-app/blob/master/e2e/jest.config.js) sets up jest with
 nightwatch, all supporting files live within [`e2e/jest-config`](https://github.com/escobard/create-app/blob/master/e2e/jest-config).

### @testing-library/nightwatch

[@testing-library/nightwatch](https://testing-library.com/docs/nightwatch-testing-library/intro) to
 align the syntax between `UI unit and end to end tests`. (make a note on the UI documentation on how queries are leveraged)
 
 Since we use [`testing-library queries`](https://testing-library.com/docs/react-testing-library/cheatsheet), a
   [`unit test like approach with expect`](https://nightwatchjs.org/api/expect/) is leveraged.

### Babel

[`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) for JavaScript es6+ syntax. 

## Docker

### Development

Dependent on [`e2e/docker/Dockerfile`](https://github.com/escobard/create-app/blob/master/e2e/docker/Dockerfile), must have a running `ui, api and db` with the UI available on `localhost:4000`.

TODO - update this section as part of #89

This file is leveraged by the [`ops/dev.yaml`](https://github.com/escobard/create-app/blob/master/ops/dev.yaml), [`ops/api-unit-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-unit-tests.yaml) and the [`ops/api-integration-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-integration-tests.yaml) docker-compose jobs. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.


### Production

Dependent on [`e2e/docker/Dockerfile`](https://github.com/escobard/create-app/blob/master/e2e/docker/Dockerfile
), must have a running `ui, api and db` with the UI available on `localhost:4000` if debugging.

TODO - update this section as part of #89

This file is leveraged by the [`ops/prod.yaml`](https://github.com/escobard/create-app/blob/master/ops/prod.yaml
) docker-compose job. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

## Libraries, Frameworks & Tools

[Nightwatch](https://nightwatchjs.org/)

[Nightwatch with Jest](https://github.com/mucsi96/nightwatch-api/tree/master/packages/jest-example)

[Jest](https://jestjs.io/)

[@testing-library/nightwatch](https://testing-library.com/docs/nightwatch-testing-library/intro)

[Babel](https://babeljs.io/docs/en/babel-preset-env)

[Docker](https://www.docker.com/)

[Docker Compose](https://docs.docker.com/compose/)

