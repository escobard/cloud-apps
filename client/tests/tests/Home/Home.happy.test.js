describe("Home happy path", () => {
  it(">> creates a note", async () => {
    const subject = "Test subject";
    const note = "Test note paragraph to pass validation";
    await landingPage.navigate().createNote(client, { subject, note });
    await landingPage.navigate().assertNote(client, subject);
    client.end();
  });
});
