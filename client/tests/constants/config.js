const chrome = require("chromedriver");

const clientHost = process.env.UI_HOST || 'localhost',
  clientPort = process.env.UI_PORT || '3000',
  clientUrl = `http://${clientHost}:${clientPort}`,
  headless = process.argv.includes("--headless") ? ["headless"] : [],
  webDriver = process.env.DOCKER ? null : {
      start_process: true,
      server_path: chrome.path,
      port: 9515
  },
  seleniumHub = process.env.SELENIUM_HUB || null;


const config = {
  url: clientUrl,
  seleniumHost: process.env.SELENIUM_HOST,
  seleniumPort: process.env.SELENIUM_PORT,
  headless,
  webDriver,
  seleniumHub
};

module.exports = config;
