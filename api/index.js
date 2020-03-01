const express = require("express"),
  createMiddleware = require("swagger-express-middleware"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  connectToDB = require("./middlewares/connectToDB"),
  port = routes.port;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
//app.use(connectToDB())
require("./routes")(app);

let server = createMiddleware("Notes.yaml", app, (err, middleware) => {
  // Add all the Swagger Express Middleware, or just the ones you need.
  // NOTE: Some of these accept optional options (omitted here for brevity)
  app.use(
    middleware.metadata(),
    middleware.CORS(),
    middleware.parseRequest(),
    middleware.validateRequest(),
  );

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});

module.exports = server;
