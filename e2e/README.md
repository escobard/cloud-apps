# End to End Tests

For more End to End Test documentation, visit [documents/e2e.md](https://github.com/escobard/create-app/blob
/master/documentation/e2e.md)

## Usage

This application expects the `create-app UI` to be running on `localhost:3000` with the API and database available. 

end to end test happy paths are dependent on the `integration` tests running first, as e2e happy path assertions rely on the data created by the integration tests.

To quickly spin up a development instance of the platform, run `npm run dev` in the parent directory, or `cd
 .. && npm run dev` from this directory.

### With NPM

1. `npm install`
2. `npm start`

### With Docker

1. `npm run test-docker`

## Scripts 

### NPM

#### All tests

`npm run test`

#### Tests in headless mode

`npm run test -- --headless`

#### Tests with tags

To run tests with a single tag

`npm test happy`

#### Tests a certain path

`npm test-path tests/Landing`

## Docker

In order to run this application with docker, `docker` and `docker-compose` have to be installed on the user's machine.

In addition, this script expects the `ui, api and db` applications to be running via `docker-compose`.

#### With docker + docker-compose

Runs the nightwatch application in a docker image, powered by a chromedriver docker image and the provided UI url.

`npm run test-docker`