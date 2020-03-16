# End to End Tests

For more End to End Test documentation, visit [documents/integration.md](https://github.com/escobard/create-app/blob/master/documentation/integration.md)

## Usage

This application expects the `create-app UI` to be running on `localhost:3000` with the API and database available.

To quickly spin up a development instance of the platform, run `npm run dev` in the root directory, or `cd
 .. && npm run dev` from this directory.

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