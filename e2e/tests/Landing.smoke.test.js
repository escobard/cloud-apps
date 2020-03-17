module.exports = {
  "@tags": ["smoke"],
  "Test": browser => {
    const landingPage = browser.page.Landing();

    landingPage.navigate().assertHeaderIcon(browser);
    browser.end();
  }
}