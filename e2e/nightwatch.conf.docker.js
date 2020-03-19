module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["screens"],
  test_workers: false,
  selenium: {
    start_process: false
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: "chromedriver",
      launch_url: process.env.UI_HOST,
      filter: "tests/**/*test.js",
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
