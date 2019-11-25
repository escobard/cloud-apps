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

// likely redundant
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports.default =
module.exports = {
  sequelize,
  models
}
