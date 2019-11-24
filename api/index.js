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

// postgress table
/*
pg
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log(err));
    */

require("./routes")(app);
let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
