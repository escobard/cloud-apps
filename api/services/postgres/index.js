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
  Users: sequelize.import('./models/users'),
  Notes: sequelize.import('./models/notes')
};

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const { Users } = models;

Users.findAll().then(values => {
  
  const cleanData = JSON.stringify(values, null, 4)
  
  console.log("All users:", cleanData);
  if(values.length === 0){
    Users.create({ email: "admin@admin" }).then(admin => {
      console.log("Auto-generated ID:", admin.id, admin.email);
    });
  }
})

module.exports.default =
module.exports = {
  sequelize,
  models
}
