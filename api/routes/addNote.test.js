const { Notes } = require("../services/postgres/models");

describe("addNote route", () => {
  const note = {
    user_id: 1,
    subject: "This is a sample note subject",
    note: "This is a sample note",
  };
  beforeEach(done => {
    done();
  });

  afterEach(done => {
    done();
  });

  it(">> happy path, add note success", done => {
    global.hasDB = true;
    sinon.stub(Notes, "create").resolves('Note added!');
    request(server)
      .post("/addNote")
      .send(note)
      .expect('"Note added!"')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        if (err) return done(err);
        done();
      });
  });

  it(">> sad path, general promise rejection", async () => {
    global.hasDB = true;
    request(server)
      .post("/addNote")
      .send(note)
      .end((err, res) => {
        expect(res.status).to.equal(503);
        expect(res.error.text).to.equal(
          '"addNotes route promise rejectionSequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:5432"'
        );
      });
  });
});
