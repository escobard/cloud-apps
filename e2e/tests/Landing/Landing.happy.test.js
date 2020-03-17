module.exports = {
  "@tags": ["happpy"],
  "Test": browser => {
    const landingPage = browser.page.Landing();

    landingPage.navigate().assertWithNotes(browser);
    browser.end();
  }
}