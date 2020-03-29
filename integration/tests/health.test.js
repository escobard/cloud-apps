describe("health route", () => {
  it(">> has DB, is running in test environment", async () => {
    let {status, body} = await request(server).get(health);
    expect(status).toEqual(200)
    expect(body).toEqual(sampleData.health.response);
  });
});