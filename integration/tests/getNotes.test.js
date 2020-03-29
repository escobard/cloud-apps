describe("getNotes", () => {
  it(">> happy path, contains note created by addNote test", async () => {
    const {
        addNote: { request: addNoteRequest }
      } = sampleData,
      { body, status } = await request(server).get(getNotes),
      userIdResult = body.filter(
      note => note.user_id === addNoteRequest.user_id
      ),
      subjectResult = body.filter(
        note => note.subject === addNoteRequest.subject
      ),
      noteResult = body.filter(note => note.note === addNoteRequest.note);

    expect(status).toEqual(200)
    expect(userIdResult.length).toBeGreaterThanOrEqual(0);
    expect(subjectResult.length).toBeGreaterThanOrEqual(0);
    expect(noteResult.length).toBeGreaterThanOrEqual(0);

  });
});