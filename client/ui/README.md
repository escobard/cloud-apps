# UI

For more expanded documentation, visit [documents/ui.md](documents/ui.md)

## Quickstart

This application can run standalone, without an API or DB available.

To get access to all features, the create-app `API` must be running on `localhost:4000` connected to running `DB`.

### With NPM

1. `npm install`
2. `npm start`

### With Docker - TODO - add docker stand alone script for prod

1. `npm run docker`

## Scripts

### Installation

`npm install`

### Local development

`npm start`

### Local testing

To run all tests, with coverage:

`npm test`

To run all tests in watch mode:

`npm run test-watch`

To run a single test:

`npm run test-watch /path/to/tests`

### Lint

To check for lint errors:

`npm run lint`

To fix lint errors

`npm run lint-fix`

### Production

`npm build`

## Docker - TODO - add docker stand alone script for prod

Configuration can be found within [`ui/docker/Dockerfile`](https://github.com/escobard/create-app/blob/master/e2e/docker/ui-test-e2e.yaml).

Builds the UI application into it's production version and hosts it on `localhost:3000`:

`npm run docker`