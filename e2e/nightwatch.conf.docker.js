/**
 * docker config, relies on external chromedriver and UI
 * @dev used for automated tests
 */

const { config } = require("./constants")

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["screens"],
  test_workers: false,
  selenium: {
    start_process: false
  },
  test_settings: {
    default: {
      selenium_port: config.seleniumPort,
      selenium_host: config.seleniumHost,
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
          args: ["headless"],
          w3c: false
        }
      }
    }
  }
};
