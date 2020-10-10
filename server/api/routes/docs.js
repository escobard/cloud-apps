import swaggerUi from "swagger-ui-express";
import SwaggerParser from "swagger-parser";
import { Router } from "express";

const router = Router();

SwaggerParser.validate("./Notes.yaml", (err, api) => {
  router.use("/", swaggerUi.serve);
  router.get("/", swaggerUi.setup(api));
});

export default router;
