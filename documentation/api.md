# API

## Introduction

The purpose of the API layer is to serve as a controller to the UI and DB applications.

## Quickstart

### With npm

In your terminal, from the parent directory:

1. `cd api`
2. `npm install`
3. `npm start`

### With npm & Docker

In your terminal, from the parent directory:

1. `cd api`
2. `npm run docker`

## Usage - Expanded 

### Swagger

Most API validation is handled with [swagger](https://swagger.io/). Live swagger docs can be found here: [http://create-app.us-east-2.elasticbeanstalk.com/api/docs](http://create-app.us-east-2.elasticbeanstalk.com/api/docs)

[`Notes.yaml`](https://github.com/escobard/create-app/blob/master/api/Notes.yaml) drives all swagger validation logic. Swagger validation is leveraged an application level through the use of the [swagger-express-middleware](https://www.npmjs.com/package/swagger-express-middleware) library.

The swagger middleware and the swagger docs are set up at [`api/index.js`](https://github.com/escobard/create-app/blob/master/api/index.js)

### Tests

#### Globals 

All tests rely on global variables initiated at test runtime, found at [`api/config.test.js`](https://github.com/escobard/create-app/blob/master/api/config.test.js)

Constants for global use are initiated globally at test runtime and live within [`api/constants`](https://github.com/escobard/create-app/tree/master/api/constants)

### Sequelize

The API leverages [sequelize](https://sequelize.org/) to communicate with the DB. Along with the rest of our `postgres` business logic, all sequelize logic lives within the [`api/services/postgres`](https://github.com/escobard/create-app/tree/master/api/services/postgres) directory.

DB authentication functionality can be found within [`api/services/postgres/authenticate.js`](https://github.com/escobard/create-app/tree/master/api/services/postgres/authenticate.js) and all sequelize models live within [`api/services/postgres/models`](https://github.com/escobard/create-app/tree/master/api/services/postgres/models).

## Docker

As with the other applications in the stack, docker is heavily leveraged at the API layer.

### Development

Dependent on [`api/ops/Dockerfile.dev`](https://github.com/escobard/create-app/blob/master/api/ops/Dockerfile.dev).

This file is leveraged by the [`ops/dev.yaml`](https://github.com/escobard/create-app/blob/master/ops/dev.yaml
) docker-compose job. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

### Production

Dependent on [`api/ops/Dockerfile`](https://github.com/escobard/create-app/blob/master/api/ops/Dockerfile)

This file is leveraged by the [`ops/prod.yaml`](https://github.com/escobard/create-app/blob/master/ops/prod.yaml
) docker-compose job. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

### Testing 

Dependent on [`api/ops/Dockerfile.dev`](https://github.com/escobard/create-app/blob/master/api/ops/Dockerfile), [`api/ops/Dockerfile.test`](https://github.com/escobard/create-app/blob/master/api/ops/Dockerfile.test) is used for rapid API
 unit test debugging with docker

This file is leveraged by the [`ops/api-unit-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-unit-tests.yaml) and the [`ops/api-integration-tests.yaml`](https://github.com/escobard/create-app/blob/master/ops/api-integration-tests.yaml) docker-compose jobs. Read through [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md) to learn more.

## Libraries, Frameworks & Tools

[node](https://nodejs.org/en/)

[express](https://expressjs.com/)

[swagger](https://swagger.io/)

[swagger-express-middleware](https://www.npmjs.com/package/swagger-express-middleware)

[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

[mocha](https://mochajs.org/)

[chai](https://www.chaijs.com/)

[supertest](https://github.com/visionmedia/supertest)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

