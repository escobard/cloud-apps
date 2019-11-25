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

const { models: { Users, Notes } } = require("./services/postgres");

Users.findAll().then(values => {
  
  const cleanData = JSON.stringify(values, null, 4)
  
  console.log("All users:", cleanData);
  if(cleanData.length >= 1){
    Users.create({ email: "admin@admin" }).then(admin => {
      console.log("Jane's auto-generated ID:", admin.id, admin.email);
    });
  }

})

Notes.findAll().then(values => {
  console.log('VALUES', JSON.stringify(values, null, 4))
})

require("./routes")(app);
let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
