import express from "express";
import createMiddleware from "swagger-express-middleware";
import cors from "cors";
import bodyParser from "body-parser";

import { routes } from "./constants";
import { swaggerValidation } from "./middlewares";

const app = express();
const port = routes.port;

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

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

export default server;