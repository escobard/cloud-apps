describe("Health route", () => {
  let defaultHealth;

  beforeEach(done => {
    process.env.environment = "development";
    defaultHealth = { healthy: true, DB: false, process: "development" };
    done();
  });

  afterEach(done => {
    process.env.environment;
    global.hasDB = null;
    done();
  });

  it(">> responds to /health, no DB", async () => {
    const { body, status } = await request(server).get(health)

    //expect(res.status).toEqual(200)
    expect(status).toEqual(200);
    expect(body).toEqual(defaultHealth);
  });

  it(">> responds to /health, has DB", async () => {
    global.hasDB = true;
    defaultHealth.DB = true;

    const { body, status } = await request(server).get(health)

    expect(status).toEqual(200);
    expect(body).toEqual(defaultHealth);
  });

  it(">> responds to /health, on staging / hosting platform", async () => {
    process.env.environment = "testing";
    defaultHealth.process = "testing";

    const { body, status } = await request(server).get(health)

    expect(status).toEqual(200);
    expect(body).toEqual(defaultHealth);
  });
});
