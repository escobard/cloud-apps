const router = require("express").Router(),
  swaggerUi = require("swagger-ui-express"),
  SwaggerParser = require("swagger-parser");

SwaggerParser.validate("./Notes.yaml", (err, api) => {
  router.use("/", swaggerUi.serve);
  router.get("/", swaggerUi.setup(api));
});

module.exports = router;
