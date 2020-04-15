# Integration

## Introduction

The purpose of the integration application is to run end to end integration tests against the API, validating product
 readiness prior to  deployment.

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

### Supertest

### Jest

[Jest](https://jestjs.io/) as the `test runner` for this application, boilerplated from [the official jest
 / nightwatch POC](https://github.com/mucsi96/nightwatch-api/tree/master/packages/jest-example).

[`e2e/jest.config.js`](https://github.com/escobard/create-app/blob/master/e2e/jest.config.js) sets up jest with
 nightwatch, all supporting files live within [`e2e/jest-config`](https://github.com/escobard/create-app/blob/master/e2e/jest-config).

### Babel

[`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) for JavaScript es6+ syntax. 

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

