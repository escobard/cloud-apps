# cloud-apps &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![CircleCI Status](https://circleci.com/gh/escobard/cloud-apps-2019.svg?style=shield&circle-token=9a2ace13d3d938798ecb8f2efc56176ea7ede1ca)](https://app.circleci.com/pipelines/github/escobard/cloud-apps-2019) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps#pull-requests) 

A simple cloud-agnostic product, designed to scale. Each application can be run independently with npm or with docker. Development, production, integration and end-to-end (e2e) test environments can be run independently or together with Docker Cgitompose.

# Table of contents

(build table of contents)

## Quickstart

[Node.js v14.19.0](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) must be installed.

### Run environments with Docker Compose

#### Development        
 `npm run dev`            
  
#### Production        
 `npm run start`   
 
#### Integration tests
`npm run integration-tests`

#### End to End tests
`npm run e2e-tests`

### Running applications individually with npm or docker

[UI docs](https://github.com/escobard/cloud-apps/blob/master/client/ui)

[API docs](https://github.com/escobard/cloud-apps/blob/master/server/api)

[Database docs](https://github.com/escobard/cloud-apps/tree/master/server/postgres)

[Integration tests docs](https://github.com/escobard/cloud-apps/tree/master/server/tests)

[End to end tests docs](https://github.com/escobard/cloud-apps/tree/master/client/tests)

## Commits

Our commits follow the [Angular commit styleguide](https://gist.github.com/brianclements/841ea7bffdb01346392c). Each commit should be carefully thought out and only contain files affected within the scope of the commit message.

## Branching

A branch's name should reference a story and the type of work being committed.

## Pull Requests

Each pull request must pass a review from another contributor and all automated tests.

## Tools & frameworks

(add links to official docs for the tech used on the stack)

## License

This repository is protected under the [MIT License](https://choosealicense.com/licenses/mit/).
