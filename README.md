# create-app

An enterprise platform boilerplate, powered by React, Node, Postgres and Docker.

Production version available here: http://create-app.us-east-2.elasticbeanstalk.com/

## Product Technology

This product loosely follows traditional MVC (Model View Controller) paradigms where:
   - The Model = the PostgreSQL database - is handled in the `/pgdb` directory
   - The View = the React user interface - is handled in the `/ui` directory
   - The Controller = the Node restful api  - handled in the `/api` directory

Expanded product concept and highlights can be found here: [documentation/concept.md](https://github.com/escobard/create-app/blob/master/documentation/concept.md)

### UI

UI documentation can be found here: [documentation/ui.md](https://github.com/escobard/create-app/blob/master/documentation/ui.md)

UI usage doc can be found here: [api/README.md](https://github.com/escobard/create-app/blob/master/ui/README.md)

### API 

API documentation can be found lives within [documentation/api.md](https://github.com/escobard/create-app/blob/master/documentation/api.md)

API usage doc can be found here: [api/README.md](https://github.com/escobard/create-app/blob/master/api/README.md)

## APP Usage

While developing, its recommended to debug each app individually with NPM.

If all apps must be ran together, its recommended to utilize docker to connect all apps in a common network.

It's not recommended to utilize the `concurrent` npm scripts as all parent scripts will depend on docker after phase 3.

### Scripts

The following scripts assume:

1) The user has `npm`, `node`, `docker` and `docker-compose` installed.

#### Scripts - Docker

The following scripts can be used to run the UI and the API via docker-compose.

##### Local development for UI and API with docker-compose routing

`npm run dev`

##### Local development for UI and API with nginx routing

`npm run dev-nginx`

##### Local prod debugging

`npm run prod`

##### Clean up idle docker images

`npm run clean`

#### Scripts - NPM - LEGACY

The following scripts can be used to run the UI and the API application `concurrently`. 

Using `concurrently` is not recommended. For debugging, it's recommended to run each application individually.


The following scripts assume:

1. `npm install` has been run in the `./`,`./ui` and `./api` directories.

##### Local development for UI and API

`npm run dev-legacy`

##### Run unit tests on UI and API

`npm run test-legacy`

### Contribution

Contribution documentation can be found here: [documentation/contribution.md](https://github.com/escobard/create-app/blob/master/documentation/contribution.md)

## Libraries, Frameworks & Tools

[React](https://reactjs.org/)

[Node](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[Docker](https://www.docker.com/)

