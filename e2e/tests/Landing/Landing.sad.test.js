module.exports = {
  "@tags": ["sad"],
  "Test": browser => {
    const landingPage = browser.page.Landing();

    landingPage.navigate().assertNoNotes(browser);
    browser.end();
  }
}