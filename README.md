# cloud-apps &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![CircleCI Status](https://circleci.com/gh/escobard/cloud-apps-2019.svg?style=shield&circle-token=9a2ace13d3d938798ecb8f2efc56176ea7ede1ca)](https://app.circleci.com/pipelines/github/escobard/cloud-apps-2019) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps#pull-requests) 

A simple note-taking tool, built with JavaScript ES6, designed to be cloud-agnostic and for scale. Each application in the system can be run independently with npm or with Docker. Quickstart of development, production, integration and end-to-end (e2e) test environments with Docker Compose is provided.

# Table of contents

* [Quickstart](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#quickstart)
* [Technical Highlights](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#technical-highlights)
* [Application docs](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#application-docs)
* [How to contribute](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#how-to-contribute)
* [Tools and frameworks](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#tools-and-frameworks)
* [License](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#license)

## Quickstart

[Node.js v14.19.0](https://nodejs.org/en/) and [Docker](https://www.docker.com/) must be installed.

### Recommended - Run environments with NPM and Docker Compose

#### Development        
 `npm run dev`            
  
#### Production        
 `npm run start`   
 
#### Integration tests
`npm run integration-tests`

#### End to End tests
`npm run e2e-tests`

### Run environments with Docker Compose

#### Development
`npm run dev`

#### Production
`npm run start`

#### Integration tests
`npm run integration-tests`

#### End to End tests
`npm run e2e-tests`

## Technical highlights

Write summary of technical highlights and how it ties in as a portfolio showcase. 

Write expanded description & link to each highlight

1. Container orchestration
2. Full stack system with JavaScript
3. Complete automated testing pyramid
4. Boilerplate for automated tests with CircleCI and Docker
5. ???

### Container orchestration

Leveraging the power of Containers, the system and its applications can be deployed as-is to any cloud provider that supports Docker. It is encouraged to leverage the provided Docker Compose files, which simulate how the system and its applications run independently and together, to facilitate multi-environment hosting, deployment and automation.

#### System overview

Descrive (dev/uat/prod environments)

#### End to end tests

#### Integration tests

### Full stack system with JavaScript

### Complete automated testing pyramid

### Boilerplate to automated deployments with CircleCI



## Application docs

[UI docs](https://github.com/escobard/cloud-apps-2019/blob/master/client/ui)

[API docs](https://github.com/escobard/cloud-apps-2019/blob/master/server/api)

[Database docs](https://github.com/escobard/cloud-apps-2019/tree/master/server/postgres)

[Integration tests docs](https://github.com/escobard/cloud-apps-2019/tree/master/server/tests)

[End to end tests docs](https://github.com/escobard/cloud-apps-2019/tree/master/client/tests)

## How to contribute

### Commits

Our commits follow the [Angular commit styleguide](https://gist.github.com/brianclements/841ea7bffdb01346392c). Each commit should be carefully thought out and only contain files affected within the scope of the commit message.

### Branching

A branch's name should reference a story and the type of work being committed.

### Pull Requests

Each pull request must pass a review from another contributor and all automated tests.

### Issues

Feel free to open an issue ticket, please leave a screenshot and a detailed instructions on how to replicate the issue. 

## Tools & frameworks

(add links to official docs for the tech used on the stack)

## License

This repository is protected under the [MIT License](https://choosealicense.com/licenses/mit/).
