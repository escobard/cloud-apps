describe("Landing happy path", ()=>{
  it(">> confirms notes have been created", async () => {
    await landingPage.navigate().assertWithNotes(client);
    client.end();
  })
})