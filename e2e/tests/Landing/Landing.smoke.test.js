describe("Landing smoke", ()=>{
  it(">> confirms header is present", async () => {
    await landingPage.navigate().assertHeaderIcon(client);
    client.end();
  })
})