# API

## Dev docs 

### Swagger

API route validation is handled with [swagger](https://swagger.io/).

[Notes.yaml](https://github.com/escobard/cloud-apps/blob/master/server/api/Notes.yaml) drives all swagger validation logic. Swagger validation is leveraged an application level through the use of the [swagger-express-middleware](https://www.npmjs.com/package/swagger-express-middleware) library.

The swagger middleware and the swagger docs are set up at [api/index.js](https://github.com/escobard/cloud-apps/blob/master/server/api/index.js).

### Tests

#### Globals 

Tests rely on global variables initiated at test runtime, found in [api/config.test.js](https://github.com/escobard/create-app/blob/master/server/api/config.test.js) and [api/constants](https://github.com/escobard/create-app/tree/master/server/api/constants).

### Sequelize

[Sequelize](https://sequelize.org/) is leveraged to communicate with the postgres database. Sequelize logic lives within [api/services/postgres](https://github.com/escobard/create-app/tree/master/api/services/postgres).
