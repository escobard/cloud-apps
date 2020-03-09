describe("API Health", () => {
  it(">> has DB, is running in test environment", done => {
    request(server)
      .get(health)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(sampleData.health.response);
        if (err) return done(err);
        done();
      });
  });
});