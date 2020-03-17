const chrome = require("chromedriver"),
  headless = process.argv.includes("--headless") ? ["headless"] : [];

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["screens"],
  test_workers: false,
  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 9515
  },
  test_settings: {
    default: {
      launch_url: "http://localhost:3000",
      filter: "tests/**/*test.js",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: headless
        }
      }
    }
  }
};
