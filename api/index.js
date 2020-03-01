const express = require("express"),
  createMiddleware = require("swagger-express-middleware"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

let server = createMiddleware("Notes.yaml", app, (err, middleware) => {
  app.use(
    middleware.metadata(),
    middleware.CORS(),
    middleware.files(),
    middleware.parseRequest(),
    middleware.validateRequest(),
    middleware.mock()
  );
  // TODO add createDB middleware

  // TODO split up into its own middleware
  app.use((err, req, res, next) => {
    res.status(err.status)
    res.type('json');
    res.send(err.message);
    console.log('Swagger validator error')
    console.log('Status: ' + err.status)
    console.log('Message: ' + err.message)
  });

  require("./routes")(app);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});

module.exports = server;
