
/** Configuration file for tests
 * @dev depends on a running host
 */

const { ops, routes, sampleData } = require("./constants")

before((done) =>{

  const { health, addNote, getNotes } = routes,
    {host, port} = ops;
  
  global.request = require("supertest");
  global.expect = require("chai").expect
  
  global.server = `http://${host}:${port}`

  // sample data
  global.sampleData = sampleData;

  // routes
  global.health = health;
  global.addNote = addNote;
  global.getNotes = getNotes;

  done()
});