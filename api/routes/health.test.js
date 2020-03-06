describe("Health route", () => {
  let defaultHealth;

  beforeEach(done => {
    process.env.environment = "development"
    defaultHealth = { healthy: true, DB: false, process: "development" };
    done();
  });

  afterEach(done => {
    process.env.environment
    global.hasDB = null;
    done();
  });

  it(">> responds to /health, no DB", async () => {
    request(server)
      .get("/health")
      .expect(defaultHealth)
  });

  it(">> responds to /health, has DB", async () => {
    global.hasDB = true;
    defaultHealth.DB = true;
    request(server)
      .get("/health")
      .expect(defaultHealth)
  });

  it(">> responds to /health, ons staging / hosting platform", async () => {
    process.env.environment = "testing"
    defaultHealth.process = "testing"
    request(server)
      .get("/health")
      .expect(defaultHealth)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(defaultHealth)
      });
  });
});
