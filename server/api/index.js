import express from "express";
import createMiddleware from "swagger-express-middleware";
import cors from "cors";
import bodyParser from "body-parser";

import { routes } from "./constants";
import { swaggerValidation } from "./middlewares";
import allRoutes from "./routes";
import docs from "./routes/docs";

const app = express();
const { port } = routes;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// swagger docs
app.use(routes.docs, docs);

createMiddleware("Notes.yaml", app, async (err, middleware) => {
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

  await allRoutes(app);
});

const server = app.listen(port, async () => {
  console.info(`Example app listening on port ${port}!`);
});

export default server;
