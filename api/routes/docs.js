const router = require("express").Router(),
  swaggerUi = require("swagger-ui-express"),
  SwaggerParser = require("swagger-parser");

let parser = new SwaggerParser();
parser.parse("Notes.yaml");
SwaggerParser.validate("Notes.yaml", (err, api) => {
  if (err) {
    // Error
  }
  else {
    // Success
    router.use("/", swaggerUi.serve);
    router.get("/", swaggerUi.setup(api));
  }
});


module.exports = router;
