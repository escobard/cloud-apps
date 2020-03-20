
/** Middleware to return swagger validation errors
 * @dev throws an error if a request doesn't match our Note.yaml swagger validation
 */

module.exports = function swaggerValidation(err){
  return async (err, req, res, next) => {
    if (err) {
      res.status(err.status);
      res.type("application/json");
      console.log("Swagger validator error");
      console.log("Status: " + err.status);
      console.log("Message: " + err.message);
      // TODO - need a util to format these string to improve its readability
      let schemaPath;
      let missingProp;
      let fullError = err.message.split(/\r\n|\r|\n/g);
      let message = fullError[0]
      fullError.map((err) => {
        if (err.includes("Schema path")){
          console.log('SCHEMA')
          schemaPath = err;
        }
        if (err.includes("Missing required")){
          console.log('MISSING')
          missingProp = err;
        }
      })
      console.log('INCLUDES', fullError.includes("Schema") )
      res.json({status: err.status, message, schemaPath, missingProp})
    } else {
      next();
    }
  }
};