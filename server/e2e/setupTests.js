
/** Configuration file for tests
 * @dev depends on a running host
 */

import supertest from "supertest"

import { ops, routes, sampleData } from "./constants";

beforeAll(async () =>{

  const { health, addNote, getNotes } = routes,
    {host, port} = ops;

  global.request = supertest;

  global.server = `http://${host}:${port}`

  // sample data
  global.sampleData = sampleData;

  // routes
  global.health = health;
  global.addNote = addNote;
  global.getNotes = getNotes;
});

afterEach(() => {
  global.server = null
})