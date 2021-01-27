describe("Home sad path", () => {
  it(">> shows network error", async () => {
    await landingPage.navigate().assertNetworkError(client);
    client.end();
  });
});
