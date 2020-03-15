# API

## Introduction

The purpose of the Integration test layer, is to run API level end to end tests on critical business services.

This layer was largely inspired by the outcomes of this story: [API - Testing - Research.](https://github.com
/escobard/create-app/issues/38)

## Usage - Expanded 

### Docker

### Swagger

This API's validation is primarily handled with swagger. You can read move about swagger here: [swagger.io](https://swagger.io/)

The swagger doc that drives all validation logic can be found here: [Notes.yaml](https://github.com/escobard/create-app/blob/master/api/Notes.yaml)

Swagger validation is leveraged an application level through [swagger-express-middleware](https://www.npmjs.com/package/swagger-express-middleware)

Swagger docs can be found here: [http://create-app.us-east-2.elasticbeanstalk.com/api/docs](http://create-app.us-east-2.elasticbeanstalk.com/api/docs)

The swagger middleware and the swagger docs are set up at [api/index.js](https://github.com/escobard/create-app/blob/master/api/index.js)

### Sequelize

### Tests

#### Globals 

All tests rely on global variables initiated at test runtime, found at [/integration/config.test.js](https://github.com/escobard/create-app/blob/master/integration/config.test.js)

Constants for global use are also initiated globally at test runtime and can be found at [/constants](https://github.com/escobard/create-app/tree/master/integration/constants)

#### Tests in order

To run tests in a pre-determined sequence, the [test-in-order.js](https://github.com/escobard/create-app/blob/master
/integration/tests/tests-in-order.js) file can be leveraged.


## Libraries, Frameworks & Tools

[Swagger for validation & documentation](https://swagger.io/)

[Mocha as a test framework](https://mochajs.org/)

[Chai for assertions](https://www.chaijs.com/)

[Supertest for request testing](https://github.com/visionmedia/supertest)
