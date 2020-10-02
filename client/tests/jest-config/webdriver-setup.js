const { startWebDriver } = require("nightwatch-api");

module.exports = async function() {
  await startWebDriver({
    env: process.env.NIGHTWATCH_ENV || "default",
    configFile: process.env.CONFIG ? `${process.env.CONFIG}` : "nightwatch.conf.js"
  });
};