# Integration

## Introduction

The purpose of the integration application is to run end to end integration tests against the API and DB, validating product readiness prior to deployment.

## Usage - Expanded 

### Supertest

[Supertest](https://github.com/visionmedia/supertest) as the primary testing library to facilitate HTTP request testing.

### Jest

[Jest](https://jestjs.io/) as the `test runner` for this application.

[`integration/setupTests.js`](https://github.com/escobard/create-app/blob/master/e2e/jest.config.js) sets up global
 jest settings.

### Babel

[`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) for JavaScript es6+ syntax. 

## Docker

### Development

Dependent on [`integration/docker/Dockerfile`](https://github.com/escobard/create-app/blob/master/e2e/docker/Dockerfile
), must have a running `api and db` with the UI available on `localhost:4000`.

TODO - update this section as part of #89

This file is leveraged by the [`ops/dev.yaml`](https://github.com/escobard/create-app/blob/master/ops/dev.yaml), [`ops/api-unit-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-unit-tests.yaml) and the [`ops/api-integration-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-integration-tests.yaml) docker-compose jobs. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

### Production

Dependent on [`e2e/docker/Dockerfile`](https://github.com/escobard/create-app/blob/master/e2e/docker/Dockerfile
), must have a running `ui, api and db` with the UI available on `localhost:4000` if debugging.

TODO - update this section as part of #89

This file is leveraged by the [`ops/prod.yaml`](https://github.com/escobard/create-app/blob/master/ops/prod.yaml
) docker-compose job. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

## Libraries, Frameworks & Tools

[Jest](https://jestjs.io/)

[supertest](https://github.com/visionmedia/supertest)

[Babel](https://babeljs.io/docs/en/babel-preset-env)

[Docker](https://www.docker.com/)

[Docker Compose](https://docs.docker.com/compose/)

