# cloud-apps-2019 &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![CircleCI Status](https://circleci.com/gh/escobard/cloud-apps-2019.svg?style=shield&circle-token=9a2ace13d3d938798ecb8f2efc56176ea7ede1ca)](https://app.circleci.com/pipelines/github/escobard/cloud-apps-2019) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps#pull-requests) 

A simple note-taking tool, built with JavaScript ES6, designed to be cloud-agnostic and re-usable. Each application in the system can be run independently with npm or with Docker. Development, production, integration and end-to-end (e2e) test environments can be simulated with Docker Compose.

Provide screenshots of application (add note in 3 steps)

Provide system overview diagram (showcase)

# Table of contents

* [Quickstart](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#quickstart)
* [Technical Highlights](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#technical-highlights)
* [Application docs](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#application-docs)
* [How to contribute](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#how-to-contribute)
* [Tools and frameworks](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#tools-and-frameworks)
* [License](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#license)

## Quickstart

### Recommended - Run environments with Docker Compose

[Docker](https://www.docker.com/) must be installed.

#### Development
`docker-compose -f dev.yaml up`

#### Production
`docker-compose -f prod.yaml up`

#### Integration tests
`docker-compose -f integration-tests.yaml up --exit-code-from integration`

#### End to end tests
`docker-compose -f e2e-tests.yaml up --no-attach node-chrome --exit-code-from e2e`

### Run environments with NPM and Docker Compose

[Node.js v14.19.0](https://nodejs.org/en/) and [Docker](https://www.docker.com/) must be installed.

#### Development        
 `npm run dev`            
  
#### Production        
 `npm run start`   
 
#### Integration tests
`npm run integration-tests`

#### End to End tests
`npm run e2e-tests`

### Run applications with NPM or Docker

Find detailed instructions on how to run each application within the [Application docs](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#application-docs).

## Technical highlights

As a portfolio piece, this project aims to showcase expertise in several areas, including:

1. [Container orchestration for scale](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#container-orchestration-for-scale)
2. [Full stack system built with JavaScript](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#full-stack-system-built-with-javascript)
3. [Automated test pyramid](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#automated-test-pyramid)
4. [Starting point for more complex systems](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#starting-point-for-more-complex-systems)
5. [Blueprint for automated tests with CircleCI](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#blueprint-for-automated-tests-with-circleci)

### Container orchestration for scale

Leveraging the power of Containers, the system and its applications can be deployed as-is to any cloud provider that supports Docker. It is encouraged to leverage the provided Docker Compose files, which simulate how the system & its applications run independently and together to facilitate multi-environment hosting, deployment and automation.

#### System overview

Docker Compose is used to simulate the system in different environments, creating a clone on your computer of how the system and its applications would run on a cloud. Leveraging Docker Compose, it is easier to troubleshoot multi-application systems outside of the cloud, while serving as a foundation for the cloud network that must be in place for the system to work on the cloud.

The diagram below outlines the network created by Docker Compose for development and production environments, including application connections, ports, routes and tools:

![System overview](https://github-production-user-asset-6210df.s3.amazonaws.com/21113484/289718598-ad6aac4a-75fc-4ed6-aad1-1f7297e2eeaf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240104T025801Z&X-Amz-Expires=300&X-Amz-Signature=a70be71e150c0bd06dbadffcad56e6505ecb8b919dcbd61e4c051e08476f22cc&X-Amz-SignedHeaders=host&actor_id=21113484&key_id=0&repo_id=219330287)

#### Integration tests

Using Docker Compose, a network can be spun up to simulate system and applications required to run integration (or service) tests. Unlike development, production and end to end test environments, the integration tests environment only contains a _partial system orchestration_, as only the API and Database are required.

The diagram below outlines the network created by Docker Compose for integration tests environment, including application connections, ports, routes and tools:

![Integration tests](https://github-production-user-asset-6210df.s3.amazonaws.com/21113484/293793555-1ce73eb1-d1cf-4309-8e8c-4c6f00fd6f43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240104T142956Z&X-Amz-Expires=300&X-Amz-Signature=c5d3939fc26e3faa94779db420ad2ad3980e63e1d9460ccbeec15d2b83000514&X-Amz-SignedHeaders=host&actor_id=21113484&key_id=0&repo_id=219330287)

#### End to end tests

A Docker Compose network is provided, simulating the system and applications that are needed to run end to end tests. 

The end to end tests environment has the most complex container orchestration out of all other provided environments, as it requires an application to run the tests (nightwatch), a hub to spin up browsers (selenium hub) and the browser itself (node-chrome). 

The diagram below outlines the full network required for the end to end tests environment, including application connections, ports, routes and tools:

![End to end tests](https://github-production-user-asset-6210df.s3.amazonaws.com/21113484/290332162-1b0a5bbc-8c03-4015-8a9a-2e05d4d6c3f1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240104T144358Z&X-Amz-Expires=300&X-Amz-Signature=d4e7324e0dc9b8ea306007317cda6926d163468564e016c45de34bcf6b016b4f&X-Amz-SignedHeaders=host&actor_id=21113484&key_id=0&repo_id=219330287)

### Automated test pyramid

Following Mike Cohn's [test pyramid](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png) approach to automated testing, the system contains a "well-rounded" automated test portfolio, which aims to cover all critical areas of the system with automated tests. 

![Mike Cohn's test pyramid](https://private-user-images.githubusercontent.com/21113484/294026074-5f90752e-b1f0-4d06-a193-bdb1c0e30441.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQzMTU2NDIsIm5iZiI6MTcwNDMxNTM0MiwicGF0aCI6Ii8yMTExMzQ4NC8yOTQwMjYwNzQtNWY5MDc1MmUtYjFmMC00ZDA2LWExOTMtYmRiMWMwZTMwNDQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTAzVDIwNTU0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkzZTE0NWU4ODc3ZDgyYzc1NzIyNmI4MjhmNDlkZWM5ODk2NjhiNjAxNTQwNGI1MThkYWJiMTdjYzRkNGViNzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.TfO3aOsg6XUsH2sZ4vIreLAlyvaIgJB7cP4bzbXqg10)

In summary, the paradigm dictates that there should be more isolated tests (unit tests) than service tests (integration tests), and more service tests than UI (e2e) tests. The test pyramid paradigm encourages developers to build more unit tests (since they are small and fast), than service tests, and more service tests than UI tests (which are slow and heavy).

While the system provides over 97% unit test coverage, only critical features are covered by integration and end to end tests. The goal is to provide a starting point to extend with more complex automated tests as required.

#### UI unit tests

![UI unit tests](https://github-production-user-asset-6210df.s3.amazonaws.com/21113484/294218000-376b95fd-0448-44b0-9c7f-0a7dd6d7635c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240104T150834Z&X-Amz-Expires=300&X-Amz-Signature=177aa9707ea21f2bfb02b887e5c3cab05e454d2a82f7c60d43c64634212e7573&X-Amz-SignedHeaders=host&actor_id=21113484&key_id=0&repo_id=219330287) 

#### API unit tests

![API unit tests](https://github-production-user-asset-6210df.s3.amazonaws.com/21113484/294218013-e8e480a6-7733-4aae-a332-874fa74f0fa8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240104T150857Z&X-Amz-Expires=300&X-Amz-Signature=4ac2fffbde74742de66c0046306055ed7720f3ddaa46978590b5596cfb14a9d1&X-Amz-SignedHeaders=host&actor_id=21113484&key_id=0&repo_id=219330287)

#### Integration tests

![Integration tests](https://github-production-user-asset-6210df.s3.amazonaws.com/21113484/294218030-7091134f-3bfa-45dc-9329-ec23c9aa6dc5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240104T150920Z&X-Amz-Expires=300&X-Amz-Signature=f1cda7e7433d69d5548852edff5058a2fc9162e952c1e0678d30163d190ab130&X-Amz-SignedHeaders=host&actor_id=21113484&key_id=0&repo_id=219330287)

#### End to end tests

![End to end tests](https://github-production-user-asset-6210df.s3.amazonaws.com/21113484/294218049-51c2b8d1-4583-4382-8bcf-4e896557dcd0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240104T150942Z&X-Amz-Expires=300&X-Amz-Signature=5f06bc688f7f0fc0566a82cfa7546be4bf07610d734987a3d46f183aa3f39b35&X-Amz-SignedHeaders=host&actor_id=21113484&key_id=0&repo_id=219330287)

### Full stack system built with JavaScript

Each application in the system uses JavaScript, with the exception of the PostgreSQL database. Leveraging a single programming language for all applications of the system has numerous advantages, including:

- **Cross-functional engineering** - seamlessly switch between application and test code, because it all looks the same!
- **Common design patterns** - consistent design patterns and coding styles between applications facilitates readability, maintenance and extendability
- **Easier to staff and scale** - hiring and training engineers on for a single programming language is easier than (the more common) multi language software stacks
- **Large community** - all tools, libraries and frameworks used in the system have large open source communities

### Starting point for more complex systems

The system and its applications can be leveraged as a starting point (or blueprint / boilerplate) for more complex systems and applications. Each application provides common design patterns that can be leveraged to facilitate development of new features. All applications are containerized with Docker, ready to be deployed as-is to any cloud provider that supports Docker. 

### Blueprint for automated tests with CircleCI

Leveraging CircleCI, Unit tests for each application (except for the database) are run on every new commit to Github. Once unit tests have passed, integration tests are run, validating API and Database changes. After integration tests pass, end to end (e2e) tests are run, validating that the UI, API and Database work as expected with the new changes. 

Following the [fail-fast](https://testsigma.com/blog/test-automation-achieve-fail-fast-fail-often/) automated testing approach, the system provides a starting point (or blueprint / boilerplate) as-is for more complex automated testing requirements.

## Application docs

[UI](https://github.com/escobard/cloud-apps-2019/blob/master/client/ui)  
[API](https://github.com/escobard/cloud-apps-2019/blob/master/server/api)  
[Database](https://github.com/escobard/cloud-apps-2019/tree/master/server/postgres)  
[Integration tests](https://github.com/escobard/cloud-apps-2019/tree/master/server/tests)  
[End to end tests](https://github.com/escobard/cloud-apps-2019/tree/master/client/tests)

## Tools and frameworks

[Node.js](https://nodejs.org/en)  
[Docker](https://www.docker.com/)     
[Docker Compose](https://docs.docker.com/compose/)  
[CircleCI](https://circleci.com)  
[React](https://react.dev/)  
[Express.js](https://expressjs.com/)  
[Swagger](https://swagger.io/)  
[PostgreSQL](https://www.postgresql.org/)  
[Jest](https://jestjs.io/)  
[Supertest](https://www.npmjs.com/package/supertest)
[Nightwatch](https://nightwatchjs.org/)      
[Selenium](https://www.selenium.dev/)

## How to contribute

### Commits

Our commits follow the [Angular commit styleguide](https://gist.github.com/brianclements/841ea7bffdb01346392c). Each commit should be carefully thought out and only contain files affected within the scope of the commit message.

### Branching

A branch's name should reference a story and the type of work being committed.

### Pull Requests

Each pull request must pass a review from another contributor and all automated tests.

### Issues

Feel free to open an issue ticket, please leave a screenshot and a detailed instructions on how to replicate the issue.  

## License

This repository is protected under the [MIT License](https://choosealicense.com/licenses/mit/).
