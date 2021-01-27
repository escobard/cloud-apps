export default describe("health route", () => {
  it(">> smoke test, has DB, is running in test environment", async () => {
    let {status, body} = await request(server).get(health);
    expect(status).toEqual(200)
    return expect(body).toEqual(sampleData.health.response);
  });
});
