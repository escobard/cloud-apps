describe("Home smoke tests", () => {
  it(">> confirms header is present", async () => {
    await landingPage.navigate().assertHeaderIcon(client);
    client.end();
  });
});
