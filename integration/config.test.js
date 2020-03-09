
/** Configuration file for tests
 * @dev depends on a running host
 */

const { routes, sampleData } = require("./constants")

before((done) =>{

  const { health, addNote, getNotes } = routes;

  global.request = require("supertest");
  global.expect = require("chai").expect

  // TODO - improve this portion during docker phase to include PORT as well
  global.server = process.env.API_HOST ||"http://localhost:4000"

  // sample data
  global.sampleData = sampleData;

  // routes
  global.health = health;
  global.addNote = addNote;
  global.getNotes = getNotes;

  done()
});