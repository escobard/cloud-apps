const chrome = require("chromedriver"),
  headless = process.argv.includes("--headless") ? ["headless"] : [];

module.exports = {
  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 9515
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: headless
        }
      }
    }
  }
};
