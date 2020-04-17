# Integration Tests

For more expanded documentation, visit [documents/integration.md](https://github.com/escobard/create-app/blob/master/documentation/integration.md)

## Quickstart

This application expects the create-app `API` to be running on `localhost:4000` connected to running `DB`.

To quickly spin up a development instance of the platform, run `npm run dev` in the parent directory, or `cd
 .. && npm run dev` from this directory.

### With NPM

1. `npm install`
2. `npm start`

### With Docker

1. `npm run test-docker`

## Scripts

### NPM

#### Development

To watch all tests:

`npm run test-watch`

To watch a single test:

`npm run test-watch moduleName`

#### Test in order

This is the script that is used in CI/CD:

`npm run test-bail`

#### Run all tests

`npm test`

## Docker

In order to run this application with docker, `docker` and `docker-compose` must be installed on the user's machine.

In addition, this script expects the `api and db` applications to be running via `docker-compose`.

#### With docker + docker-compose

Configuration can be found within [`integration/docker/api-test-integration.yaml`](https://github.com/escobard/create-app/blob/master/e2e/docker/ui-test-e2e.yaml).

Runs the integration application in a docker image and the provided API url. 

`npm run test-docker`