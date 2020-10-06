/** Configuration file for tests
 * @dev depends on a running host
 */

import supertest from "supertest";

import { ops, routes, sampleData } from "./constants";

beforeAll(async () => {
  const { health, addNote, getNotes } = routes;

  global.request = supertest;

  // sample data
  global.sampleData = sampleData;

  // routes
  global.health = health;
  global.addNote = addNote;
  global.getNotes = getNotes;
});

beforeEach(() => {
  const { host, port } = ops;
  global.server = `http://${host}:${port}`;
});

afterEach(() => {
  global.server = null;
});
