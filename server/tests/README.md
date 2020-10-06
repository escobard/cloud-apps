# Integration Tests

For more expanded documentation, visit [documents/integration.md](https://github.com/escobard/create-app/blob/master/documentation/integration.md)

## Quickstart

This application expects the create-app `API` to be running on `localhost:4000` connected to running `DB`.

1. `npm install`
2. `npm start`

## Usage

### Run all tests

`npm test`

### Watch all tests

`npm run test-watch`

#### Run a single test

`npm run test-watch moduleName`

### Run tests in order

`npm run test-bail` OR `npm start`

### With Docker

`npm run test-docker`

## Libraries, Frameworks & Tools

[Jest](https://jestjs.io/)

[supertest](https://github.com/visionmedia/supertest)

[Babel](https://babeljs.io/docs/en/babel-preset-env)

[Docker](https://www.docker.com/)

[Docker Compose](https://docs.docker.com/compose/)

