const { startWebDriver } = require("nightwatch-api");

module.exports = async function() {
  await startWebDriver({
    env: process.env.NIGHTWATCH_ENV || "default",
    configFile: "nightwatch.conf.js"
  });
};
