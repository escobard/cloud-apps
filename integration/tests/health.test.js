describe("API Health", () => {
  it(">> has DB, is running in test environment", done => {

    // TODO - add this
    const health = { healthy: true, DB: true, /* environment: testing */ };

    request(server)
      .get("/health")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(health);
        if (err) return done(err);
        done();
      });
  });
});