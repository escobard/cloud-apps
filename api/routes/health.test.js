const request = require("supertest");

describe("Testing health route", () => {
  let server;
  let defaultHealth;

  // TODO find a way to make this re-usable
  before(function(done) {
    server = require("../index");
    // necessary to prevent tests from running before swagger middleware is ready
    setTimeout(done, 10);
  });

  beforeEach(done => {
    server = require("../index");
    defaultHealth = { healthy: true, DB: false, process: "dev" }
    done();
  });

  afterEach(done => {
    global.hasDB = null;
    global.environment = null;
    server.close();
    done();
  });

  it("responds to /health, no DB", done => {
    request(server)
      .get("/health")
      .expect(defaultHealth)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("responds to /health, has DB", done => {
    global.hasDB = true;
    defaultHealth.DB = true;
    request(server)
      .get("/health")
      .expect(defaultHealth)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("responds to /health, on staging / hosting platform", done => {
    global.environment = "GCP";
    defaultHealth.process = "GCP";
    request(server)
      .get("/health")
      .expect(defaultHealth)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
