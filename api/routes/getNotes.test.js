describe("getNotes route", () => {

  beforeEach(done => {
    done();
  });

  afterEach(done => {
    done();
  });

  it(">> happy path", done => {
    request(server)
      .get("/getNotes")
      .expect('')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it(">> sad path", done => {
    request(server)
      .get("/getNotes")
      .expect('')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
