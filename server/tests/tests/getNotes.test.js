export default describe("getNotes", () => {
  it(">> smoke test, contains note created by addNote test", async () => {
    const {
        addNote: { request: addNoteRequest }
      } = sampleData,
      { body, status } = await request(server).get("/"),
      noteResult = body.filter(note => note.note === addNoteRequest.note);

    expect(status).toEqual(200);
    expect(noteResult.length).toBeGreaterThanOrEqual(0);
  });
});
