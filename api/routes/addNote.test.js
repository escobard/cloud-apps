const { Notes } = require("../services/postgres/models");

describe("addNote route", () => {
  let note;
  beforeEach(done => {
    note = {
      user_id: 1,
      subject: "This is a sample note subject",
      note: "This is a sample note"
    };
    done();
  });

  afterEach(done => {
    done();
  });

  it(">> happy path, add note success", done => {
    global.hasDB = true;
    sinon.stub(Notes, "create").resolves("Note added!");
    request(server)
      .post(addNote)
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
      .post(addNote)
      .send(note)
      .end((err, res) => {
        expect(res.status).to.equal(503);
        expect(res.error.text).to.equal(
          '{"type":"Promise rejection error","status":503,"message":"connect ECONNREFUSED 127.0.0.1:5432"}'
        );
      });
  });
});
