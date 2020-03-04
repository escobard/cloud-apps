// timeout is necessary to unit test swagger middleware
before(function(done){
  // setup global environment variable for server + request builder
  global.request = require("supertest");
  global.server = require("./index");
  global.sinon = require("sinon");
  global.expect = require("chai").expect;

  // TODO - expand request with external API url, if tests are running in CI/CD

  setTimeout(done, 10);
})
beforeEach(done => {
  server = require("./index");
  done();
});

afterEach(done => {
  server.close();
  done();
});
after(function(done){
  sinon.restore();
  done()
})