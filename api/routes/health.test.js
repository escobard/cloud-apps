describe("Health route", () => {
  let defaultHealth;

  beforeEach(done => {
    server = require("../index");
    defaultHealth = { healthy: true, DB: false, process: "dev" };
    done();
  });

  afterEach(done => {
    hasDB = null;
    environment = null;
    server.close();
    done();
  });

  it(">> responds to /health, no DB", done => {
    request(server)
      .get("/health")
      .expect(defaultHealth)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  }),
  it(">> responds to /health, has DB", done => {
    hasDB = true;
    defaultHealth.DB = true;
    request(server)
      .get("/health")
      .expect(defaultHealth)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  }),
  it(">> responds to /health, on staging / hosting platform", done => {
    environment = "GCP";
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
