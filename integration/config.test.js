before((done) =>{
  global.request = require("supertest");
  global.expect = require("chai").expect
  // TODO - improve this portion during docker phase to include PORT as well
  global.server = process.env.API_HOST ||"http://localhost:4000"
  done()
});