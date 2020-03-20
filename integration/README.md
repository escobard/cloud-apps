# Integration Tests

For more Integration Test documentation, visit [documents/integration.md](https://github.com/escobard/create-app/blob/master/documentation/integration.md)

### Usage

This application expects the `create-app API` to be running on `localhost:4000` with a database available.

To quickly spin up a development instance of the platform, run `npm run dev` in the parent directory, or `cd
 .. && npm run dev` from this directory.

## Scripts

### NPM

#### Development

`npm run test-watch`

#### Test in order

This is the script that is used in CI/CD:

`npm run test-in-order`

#### Run all tests

`npm test`

## Docker

In order to run this application with docker, `docker` and `docker-compose` have to be installed on the user's machine.

In addition, this script expects the `api and db` applications to be running via `docker-compose`.

Boilerplate for CI/CD integration jobs with supertest.

#### Quickstart

In the root directory, run `npm run dev`

#### Nightwatch with docker + docker-compose

Runs the integration application in a docker image and the provided API url.

`npm run test-compose`