// necessary to ensure

describe("getNotes", () => {
  it(">> happy path, contains note created by addNote test", done => {

    const {
      addNote: { request: addNoteRequest }
    } = sampleData;

    request(server)
      .get(getNotes)
      .end((err, { status, body }) => {

        let userIdResult = body.filter(note => note.user_id === addNoteRequest.user_id),
          subjectResult = body.filter(note => note.subject === addNoteRequest.subject),
          noteResult = body.filter(note => note.note === addNoteRequest.note);

        expect(status).to.equal(200);
        expect(userIdResult).to.have.lengthOf.above(0)
        expect(subjectResult).to.have.lengthOf.above(0)
        expect(noteResult).to.have.lengthOf.above(0)
        if (err) return done(err);
        done();
      });
  });
});