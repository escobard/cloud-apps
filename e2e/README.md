# End to End Tests

For more End to End Test documentation, visit [documents/integration.md](https://github.com/escobard/create-app/blob/master/documentation/integration.md)

## Usage

This application expects the `create-app UI` to be running on `localhost:3000` with the API and database available. 

end to end test happy paths are dependent on the `integration` tests running first, as e2e happy path assertions rely on the data created by the integration tests.

### Quickstart:

In the root directory run `npm run dev`

## Scripts 

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