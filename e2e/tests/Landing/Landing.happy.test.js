module.exports = {
  "@tags": ["happy"],
  "Test": browser => {
    const landingPage = browser.page.Landing();

    landingPage.navigate().assertWithNotes(browser);
    browser.end();
  }
}