describe("addNote", () => {
  it(">> can create a note, response has expected properties", done => {
    const {
      addNote: { request: addNoteRequest }
    } = sampleData;
    request(server)
      .post(addNote)
      .send(addNoteRequest)
      .end((err, { status, body }) => {
        expect(status).to.equal(200);
        expect(body.note).to.deep.equal(addNoteRequest.note);
        expect(body.subject).to.deep.equal(addNoteRequest.subject);
        expect(body.user_id).to.deep.equal(addNoteRequest.user_id);
        expect(body.id).to.be.a("number");
        expect(body.date).to.be.a("string");
        if (err) return done(err);
        done();
      });
  });
});