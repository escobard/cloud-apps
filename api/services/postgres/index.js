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
  Values: sequelize.import('./models/values'),
  Users: sequelize.import('./models/users'),
  Notes: sequelize.import('./models/notes')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports.default =
module.exports = {
  sequelize,
  models
}
