
/** Configuration file for tests
 * @dev depends on a running host
 */

const { routes } = require("./constants")

before((done) =>{

  const { health, addNote, getNotes } = routes;

  global.request = require("supertest");
  global.expect = require("chai").expect

  // TODO - improve this portion during docker phase to include PORT as well
  global.server = process.env.API_HOST ||"http://localhost:4000"

  // routes
  global.health = health;
  global.addNote = addNote;
  global.getNotes = getNotes;

  done()
});