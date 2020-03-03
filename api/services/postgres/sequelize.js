// file to connect to sequelize
const Sequelize = require("sequelize"),
  {
    pgPort,
    pgHost,
    pgUser,
    pgDatabase,
    pgPassword
  } = require("../../constants/dbkeys"),
  authenticate = require("./authenticate");

const sequelize = new Sequelize(pgDatabase, pgUser, pgPassword, {
  host: pgHost,
  port: pgPort,
  dialect: "postgres",
  define: {
    timestamps: false,
    schema: "notes"
  }
});

authenticate(sequelize)

module.exports = sequelize;

