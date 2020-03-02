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

sequelize
  .authenticate()
  .then(() => {
    global.hasDB = true;
    console.log("Connection has been established successfully.");

    // TODO - this logic will be moved to the auth service with phase 5
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
  })
  .catch(err => {
    const error = "Unable to connect to the database: " + err;
    console.error(error);
    global.hasDB = false;
    global.dbError = error
  });

module.exports = {
  sequelize,
  models
};
