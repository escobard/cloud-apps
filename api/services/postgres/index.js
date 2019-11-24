const Sequelize = require('sequelize'),
port = routes.port,
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
  },
);

const models = {
  Values: sequelize.import('./models/values')
};

export { sequelize };
export default models;
