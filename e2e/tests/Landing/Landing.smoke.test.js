import { expect } from "jest"

export default {
  "@tags": ["smoke"],
  "Test": browser => {
    const landingPage = browser.page.Landing();

    landingPage.navigate().assertHeaderIcon(browser);
    expect('TEST')
    browser.end();
  }
}