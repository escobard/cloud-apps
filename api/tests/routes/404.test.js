const request = require("supertest");

/*
// TODO - base tests for API to be updated for all Share routes
describe("Testing 404 route", () => {
  let server;

  beforeEach(done => {
    server = require("../../index");
    done();
  });

  afterEach(done => {
    server = null;
    done();
  });

  it("404 everything else", done => {
    request(server)
      .get("/foo/bar")
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
*/