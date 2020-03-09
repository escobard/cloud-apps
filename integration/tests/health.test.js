describe("API Health", () => {
  it(">> has DB, is running in test environment", done => {

    // TODO - update with environment when that's working
    const response = { healthy: true, DB: true, /* environment: testing */ };

    request(server)
      .get(health)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(response);
        if (err) return done(err);
        done();
      });
  });
});