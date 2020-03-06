describe("getNotes route", () => {

  beforeEach(done => {
    done();
  });

  afterEach(done => {
    global.hasDB = null;
    global.environment = null;
    done();
  });

  it(">> happy path", async()=> {
    global.hasDB = true;
    request(server)
      .get("/getNotes")
      .end((err, res) => {
        expect(res.error.status).to.equal(503);
        return expect(res.error.text).to.equal(
          '"getNotes route promise rejectionSequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:5432"'
        );
      });
  });

  it(">> sad path", async () => {
    global.hasDB = true;
    request(server)
      .get("/getNotes")
      .end((err, res) => {
        expect(res.error.status).to.equal(503);
        return expect(res.error.text).to.equal(
          '"getNotes route promise rejectionSequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:5432"'
        );
      });
  });
});
