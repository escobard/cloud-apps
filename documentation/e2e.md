# End to End

## Introduction

The purpose of the API layer is to serve as a controller to the UI and DB applications.

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

### @testing-library/nightwatch

### Babel

## Docker

### Development

Dependent on [`api/ops/Dockerfile.dev`](https://github.com/escobard/create-app/blob/master/api/ops/Dockerfile.dev).

This file is leveraged by the [`ops/dev.yaml`](https://github.com/escobard/create-app/blob/master/ops/dev.yaml), [`ops/api-unit-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-unit-tests.yaml) and the [`ops/api-integration-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-integration-tests.yaml) docker-compose jobs. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

### Production

Dependent on [`api/ops/Dockerfile`](https://github.com/escobard/create-app/blob/master/api/ops/Dockerfile)

This file is leveraged by the [`ops/prod.yaml`](https://github.com/escobard/create-app/blob/master/ops/prod.yaml
) docker-compose job. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

## Libraries, Frameworks & Tools

[node](https://nodejs.org/en/)

[express](https://expressjs.com/)

[swagger](https://swagger.io/)

[swagger-express-middleware](https://www.npmjs.com/package/swagger-express-middleware)

[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

[mocha](https://mochajs.org/)

[chai](https://www.chaijs.com/)

[supertest](https://github.com/visionmedia/supertest)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

