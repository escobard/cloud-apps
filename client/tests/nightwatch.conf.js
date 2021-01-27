
/**
 * docker config, relies on external chromedriver and UI
 * @dev used for automated tests
 */

const { config } = require("./constants")

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["screens"],
  globals_path : "nightwatch.globals.js",
  webdriver: config.webDriver,
  test_settings: {
    default: {
      selenium_host: config.seleniumHub,
      launch_url: config.url,
      filter: "tests/**/*test.js",
      screenshots:{
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "screenshots"
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ['headless'],
          w3c: false
        }
      },
      chrome: {
        desiredCapabilities: {
          browserName: 'chrome',
        },
      },
    }
  }
};
