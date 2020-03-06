const express = require("express"),
  createMiddleware = require("swagger-express-middleware"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port,
  { swaggerValidation } = require("./middlewares");

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// swagger docs
app.use(routes.docs, require("./routes/docs"));

createMiddleware("Notes.yaml", app, (err, middleware) => {
  app.use(
    middleware.metadata(),
    middleware.files(),
    middleware.CORS(),
    middleware.parseRequest(),
    middleware.validateRequest()
    // mock should only be used when we want to use swagger examples as route response mocks
    // middleware.mock()
  );

  app.use(swaggerValidation(err));

  require("./routes")(app);
});

let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
