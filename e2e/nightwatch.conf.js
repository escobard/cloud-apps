const chrome = require("chromedriver");

// sets headless as an argument if --headless argument is present
const headless = process.argv.includes("--headless") ? ["headless"] : [];

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["screens"],
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
