export default describe("addNote route", () => {
  it(">> smoke test, response has expected properties", async () => {
    const {
        addNote: { request: addNoteRequest }
      } = sampleData,
      { body,status } = await request(server).post("/").send(addNoteRequest);

    expect(status).toEqual(200);
    expect(body.note).toEqual(addNoteRequest.note);
    expect(body.subject).toEqual(addNoteRequest.subject);
    expect(body.user_id).toEqual(addNoteRequest.user_id);
    expect(body.id).toBeNumber();
    expect(body.date).toBeString();
    expect(body.subject).toBeString();
    expect(body.note).toBeString();
  });
});
