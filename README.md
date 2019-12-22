# create-app

An enterprise platform boilerplate, forked from escobard/create-dapp

## APP Usage

Production version available here: (enter future production URL here)

### Scripts

The following scripts assume:

1) The user has `docker` and `docker-compose` installed.
2) `npm install` has been run in the `./`,`./ui` and `./api` directories.

#### Scripts - NPM

The following scripts can be used to run the UI and the API application cocurrently. For debugging, it's recommended to run each application individually.

##### Local development for UI and API

`npm run dev`

##### Run unit tests on UI and API

`npm run test`

#### Scripts - Docker

The following scripts can be used to run the UI and the API via docker-compose.

##### Local development for UI and API with docker-compose routing

`npm run dev-compose`

##### Local development for UI and API with nginx routing

`npm run dev-nginx`

##### Clean up idle docker images

`npm run clean`

## Product Technology

This product follows the traditional MVC (Model View Controller) paradigm where:
   - The Model = the PostgreSQL database - is handled in the `/pgdb` directory
   - The View = the React user interface - is handled in the `/ui` directory
   - The Controller = the Node restful api  - handled in the `/api` directory

Expanded product concept and highlights can be found here: [documentation/concept.md](https://github.com/escobard/create-app/blob/master/documentation/concept.md)

### UI

UI documentation can be found here: [documentation/ui.md](https://github.com/escobard/create-app/blob/master/documentation/ui.md)

UI usage doc can be found here: [api/README.md](https://github.com/escobard/create-app/blob/master/ui/README.md)

### API 

API documentation can be found here: [documentation/api.md](https://github.com/escobard/create-app/blob/master/documentation/api.md)

API usage doc can be found here: [api/README.md](https://github.com/escobard/create-app/blob/master/api/README.md)

### Contribution

Contribution documentation can be found here: [documentation/contribution.md](https://github.com/escobard/create-app/blob/master/documentation/contribution.md)

## Libraries, Frameworks & Tools

[React](https://reactjs.org/)

[Redux](https://redux.js.org/)

[Node](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[Docker](https://www.docker.com/)

[Docker Compose](https://docs.docker.com/compose/)