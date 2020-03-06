describe("Health route", () => {
  let defaultHealth;

  beforeEach(done => {
    global.environment = null;
    defaultHealth = { healthy: true, DB: false, process: "dev" };
    done();
  });

  afterEach(done => {
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

  it(">> responds to /health, on staging / hosting platform", async () => {
    global.environment = "GCP";
    defaultHealth.process = "GCP";
    request(server)
      .get("/health")
      .expect(defaultHealth)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(defaultHealth)
      });
  });
});
