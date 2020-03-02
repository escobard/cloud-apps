const express = require("express"),
  createMiddleware = require("swagger-express-middleware"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  swaggerError = require('./middlewares/swaggerError')
  port = routes.port;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

let server = createMiddleware("Notes.yaml", app, (err, middleware) => {

  // TODO add createDB middleware

  // TODO split up into its own middleware
  app.use((err, req, res, next) => {
    if (err){
      res.status(err.status)
      res.type('application/json');
      const error = {
        status: err.status,
        message: err.message
      }
      res.json(error);
      console.log('Swagger validator error')
      console.log('Status: ' + err.status)
      console.log('Message: ' + err.message)
    }
    else{
      next()
    }

  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
  require("./routes")(app);
});


module.exports = server;
