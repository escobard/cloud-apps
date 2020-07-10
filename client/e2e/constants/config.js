const clientHost = process.env.UI_HOST,
  clientPort = process.env.UI_PORT
  clientUrl = `http://${clientHost}:${clientPort}`;

const config = {
  url: clientUrl,
  seleniumHost: process.env.SELENIUM_HOST,
  seleniumPort: process.env.SELENIUM_PORT
};

module.exports = config;
