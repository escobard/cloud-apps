const Sequelize = require('sequelize'),
  {
    pgPort,
    pgHost,
    pgUser,
    pgDatabase,
    pgPassword
  } = require('../../constants/dbkeys');

const sequelize = new Sequelize(
  pgDatabase,
  pgUser,
  pgPassword,
  {
    host: pgHost,
    port: pgPort,
    dialect: 'postgres',
    define: {
      timestamps: false,
      schema: "notes"
    }
  },
);

const models = {
  Values: sequelize.import('./models/values')
};

module.exports.default =
module.exports = {
  sequelize,
  models
}
