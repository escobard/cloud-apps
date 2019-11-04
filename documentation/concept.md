# create-dapp - An enterprise platform boilerplate

An enterprise platform boilerplate, forked from escobard/create-dapp

## Product Technology

This product follows the traditional MVC (Model View Controller) paradigm where:
    - The Model = the Ethereum blockchain protocol - is handled in the `/ethereum` directory
    - The View = the React user interface - is handled in the `/ui` directory
    - The Controller = the Node restful api  - handled in the `/api` directory

In addition, the following stack was chosen to rapidly deliver a production ready decentralized product:

1) React for the UI with `create-react-app`.
2) Node with Express for the restful API.

## Product highlights

1) UI:
    - `sass` styled UI, including utilization of mixins, variables, global vs component level styles.
    - Form level data type, length, and business validation
    - Re-usable component best practices
    - React only state usage without the need for redux.
    - semantic-ui-react for re-usable components.
    - responsive UI.
    - User friendly, hashed navigatable sections
    - jest snapshot testing (not all components are tested)
    - production ready bundling with create-react-app.
2) API:  null, data type, value, business validation.
    - re-usable middlewares
    - testing with supertest (not all routes are tested)