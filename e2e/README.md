# End to End Tests

For more End to End Test documentation, visit [documents/integration.md](https://github.com/escobard/create-app/blob/master/documentation/integration.md)

## Usage

This application expects the `create-app UI` to be running on `localhost:3000` with the API and database available. 

end to end test happy paths are dependent on the `integration` tests running first, as e2e happy path assertions rely on the data created by the integration tests.

## Scripts 

### NPM

#### All tests

`npm run test`

#### Tests in headless mode

`npm run test -- --headless`

#### Tests with tags

To run tests with a single tag

`npm test -- --tag happy`

To run tests with multiple tags

`npm test -- --tag happy --tag smoke`

#### Tests a certain path

`npm test-path tests/Landing`

## Docker

In order to run this application with docker, `docker` and `docker-compose` have to be installed on the user's machine.

In addition, this script expects the `ui, api and db` applications to be running via `docker-compose`.

Boilerplate for CI/CD e2e jobs with nightwatch.

#### Quickstart

In the root directory, run `npm run dev`

#### Nightwatch with docker + docker-compose

Runs the nightwatch application in a docker image, powered by a chromedriver docker image and the provided UI url.

`npm run test-compose`