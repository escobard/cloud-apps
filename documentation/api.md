# API

## Introduction

The purpose of the API layer is to serve as a controller to the UI and DB applications.

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

To run tests in a pre-determined sequence, the [test-in-order.js](https://github.com/escobard/create-app/blob/master/integration/tests/tests-in-order.js) file can be leveraged.

## Libraries, Frameworks & Tools

[node](https://nodejs.org/en/)

[express](https://expressjs.com/)

[swagger-express-middleware](https://www.npmjs.com/package/swagger-express-middleware)

[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

[mocha](https://mochajs.org/)

[chai](https://www.chaijs.com/)

[supertest](https://github.com/visionmedia/supertest)

[Docker](https://www.docker.com/)

[Docker-compose](https://docs.docker.com/compose/)

[Swagger](https://swagger.io/)
