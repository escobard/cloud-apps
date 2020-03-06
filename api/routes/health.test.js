describe("Health route", () => {
  let defaultHealth;

  beforeEach(done => {
    defaultHealth = { healthy: true, DB: false, process: "dev" };
    done();
  });

  afterEach(done => {
    global.hasDB = null;
    global.environment = null;
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
    environment = "GCP";
    defaultHealth.process = "GCP";
    request(server)
      .get("/health")
      .expect(defaultHealth)
  });
});
