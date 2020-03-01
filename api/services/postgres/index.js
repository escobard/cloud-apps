const Sequelize = require("sequelize"),
  {
    pgPort,
    pgHost,
    pgUser,
    pgDatabase,
    pgPassword
  } = require("../../constants/dbkeys");

const sequelize = new Sequelize(pgDatabase, pgUser, pgPassword, {
  host: pgHost,
  port: pgPort,
  dialect: "postgres",
  define: {
    timestamps: false,
    schema: "notes"
  }
});

const models = {
  Users: sequelize.import("./models/users"),
  Notes: sequelize.import("./models/notes")
};

// TODO - move this entire user logic to a middleware

sequelize
  .authenticate()
  .then(() => {
    global.hasDB = true;
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    const error = "Unable to connect to the database: " + err
    console.error(error);
    global.hasDB = false;
  });
/*
// TODO - move this entire user logic to a middleware
const { Users } = models;
Users.findAll()
  .then(values => {
    const { hasDB } = global;

    const cleanData = JSON.stringify(values, null, 4);

    console.log("All users:", cleanData);
    if (hasDB === true && values.length === 0) {
      Users.create({ email: "admin@admin" }).then(admin => {
        console.log("Auto-generated ID:", admin.id, admin.email);
      });
    }
  })
  .catch(err => {
    console.error("Unable to connect to create base user", err);
  });
*/
module.exports = {
  sequelize,
  models
};
