module.exports = {
  "@tags": ["smoke"],
  "Test": browser => {
    const landingPage = browser.page.Landing();

    landingPage.assertWithNotes(browser);
    browser.end();
  }
}