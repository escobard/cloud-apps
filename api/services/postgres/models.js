// file to add models to sequelize instance
const sequelize = require("./sequelize");

const models = {
  Users: sequelize.import("./models/users"),
  Notes: sequelize.import("./models/notes")
};

module.exports = models;