import { client } from "nightwatch-api";
const { getQueriesFrom } = require("@testing-library/nightwatch");

global.client = client;
global.getQueriesFrom = getQueriesFrom;

// screens
global.landingPage = client.page.Home();
