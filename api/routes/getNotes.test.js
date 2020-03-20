const { Notes } = require("../services/postgres/models");

describe("getNotes route", () => {
  const users = [
    {
      id: 3,
      user_id: 1,
      subject: "This is a sample note subject",
      note: "This is a sample note",
      date: "a JavaScript generated date"
    }
  ];
  beforeEach(done => {
    done();
  });

  afterEach(done => {
    global.hasDB = null;
    global.environment = null;
    done();
  });

  it(">> happy path, get all users success", done => {
    global.hasDB = true;
    sinon.stub(Notes, "findAll").resolves(users);
    request(server)
      .get(getNotes)
      .expect(users)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        if (err) return done(err);
        done();
      });
  });

  it(">> sad path, general promise rejection", async () => {
    global.hasDB = true;
    request(server)
      .get(getNotes)
      .end((err, res) => {
        expect(res.error.status).to.equal(503);
        expect(res.error.text).to.equal(
          '{"status":503,"message":"connect ECONNREFUSED 127.0.0.1:5432"}'
        );
        if (err) return err;
      });
  });
});
