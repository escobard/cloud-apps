const sequelize = require("./sequelize"),
  models = require("./models"),
  authenticate = require("./authenticate")

authenticate(sequelize)

module.exports = {
  sequelize,
  models
};
