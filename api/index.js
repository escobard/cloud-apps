const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port,
  {
    pgUser,
    pgHost,
    pgDatabase,
    pgPassword,
    pgPort,
  } = require('./constants/dbkeys');

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// PGDB
const { Pool } = require('pg'),
pg = new Pool({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    pasword: pgPassword,
    port: pgPort
})
pg.on('error', () => console.log('Lost PG connection'));

// sets our DB instance to global
global.pg = pg;

const { sequelize, models: { Users, Notes } } = require("./services/postgres");

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// need to update with user / book models
Users.findAll().then(values => {
  console.log("All users:", JSON.stringify(values, null, 4));
  Users.create({ email: "admin@admin" }).then(jane => {
    console.log("Jane's auto-generated ID:", jane.id, jane.email);
    Notes.create({user_id: 1, subject: "first note", note: "First note thoughts"}).then(note => {
      console.log("Note:", note)
    })
  });
})

require("./routes")(app);
let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
