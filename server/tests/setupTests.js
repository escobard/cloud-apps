/** Configuration file for tests
 * @dev depends on a running host
 */

import supertest from "supertest";

import { ops, routes, sampleData } from "./constants";

beforeAll(async () => {
  const { health } = routes;

  global.request = supertest;

  // sample data
  global.sampleData = sampleData;

  // routes
  global.health = health;
});

beforeEach(() => {
  global.server = `http://${ops.host}:${ops.port}`;
});

afterEach(() => {
  global.server = null;
});
