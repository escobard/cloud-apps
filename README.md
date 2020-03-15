
# create-app 
An enterprise platform boilerplate, powered by React, Node, Postgres and Docker.     
      
Production version available here: http://create-app.us-east-2.elasticbeanstalk.com/      
      
## About the Product 
The goal is to challenge enterprise software norms, where a combination of Java, Python and JavaScript expertise may be
 expected. It is much harder for developers to learn 3 different languages, than to leverage 1 language to solve all
  necessary business problems. This is the primary argument behind this boilerplate and its opinionated software architecture.    
     
The product loosely follows traditional MVC (Model View Controller) paradigms where:      
 - The Model = is handled in the `/db` directory      
 - The View = is handled in the `/ui` directory      
 - The Controller = the Node restful api  - handled in the `/api` directory      
         
For a deeper dive into the drivers behind this project, read through [`documentation/concept.md`](https://github.com/escobard/create-app/blob/master/documentation/concept.md)      
      
### UI - this area needs work - Follow API format
 UI documentation can be found here: [documentation/ui.md](https://github.com/escobard/create-app/blob/master/documentation/ui.md)      
      
UI usage doc can be found here: [api/README.md](https://github.com/escobard/create-app/blob/master/ui/README.md)      
      
### API   

The API - powered by Node.js and Express - acts as an ORM, controlling the communications between the UI and DB applications.  

You can find the API's functional code and usage documentation within the [`api`](https://github.com/escobard/create-app/tree/master/api) directory.

For expanded API documentation, have a read through [`documentation/api.md`](https://github.com/escobard/create-app/blob/master/documentation/api.md).

### DB - Follow API format

### Integration - Follow API format

### E2E - Follow API format

### DevOps - Follow API format

### nginx - Follow API format
  
## APP Usage - this area needs work

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
 
## Contribution - this area needs work
 Contribution documentation can be found here: [documentation/contribution.md](https://github.com/escobard/create-app/blob/master/documentation/contribution.md)      
      
## Libraries, Frameworks & Tools - this area needs work
[React](https://reactjs.org/)      
      
[Node](https://nodejs.org/en/)      
      
[Express](https://expressjs.com/)      
      
[Docker](https://www.docker.com/)