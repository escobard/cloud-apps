const base = {
  "Base test": browser => {
    browser.url(browser.launch_url)
      .waitForElementVisible("body")
      .end()
  }
};

module.exports = base;