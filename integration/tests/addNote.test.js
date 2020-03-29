describe("addNote route", () => {
  it(">> happy path, response has expected properties", async () => {
    const {
        addNote: { request: addNoteRequest }
      } = sampleData,
      { body,status } = await request(server).post(addNote).send(addNoteRequest);

    expect(status).toEqual(200)
    expect(body.note).toEqual(addNoteRequest.note);
    expect(body.subject).toEqual(addNoteRequest.subject);
    expect(body.user_id).toEqual(addNoteRequest.user_id);
    expect(typeof body.id).toBe("number");
    expect(typeof body.date).toBe("string");
  });
});