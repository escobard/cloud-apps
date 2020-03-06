const sequelize = require("./sequelize"),
  models = require("./models"),
  authenticate = require("./authenticate")

// authenticates DB connection
authenticate(sequelize)

module.exports = {
  sequelize,
  models
};
