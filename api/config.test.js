// timeout is necessary to unit test swagger middleware
before(async () =>{
  // sets port to something else to avoid clashes with local dev
  // for whatever reason, nyc fails when port changes
  //process.env.PORT = 5555;

  // setup global environment variable for server + request builder
  global.request = require("supertest");
  global.server = require("./index");
  global.sinon = require("sinon");
  global.expect = require("chai").expect;
  // TODO - expand request with external API url, if tests are running in CI/CD
})

beforeEach(done => {
  server = require("./index");
  done();
});

afterEach(done => {
  sinon.restore();
  server.close();
  done();
});

after(function(done){
  sinon.restore();
  done()
})