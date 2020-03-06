
/** Middleware to return swagger validation errors
 * @dev throws an error if a request doesn't match our Note.yaml swagger validation
 */

module.exports = function swaggerValidation(err){
  return async (err, req, res, next) => {
    if (err) {
      res.status(err.status);
      res.type("application/json");
      res.json(err.message);
      console.log("Swagger validator error");
      console.log("Status: " + err.status);
      console.log("Message: " + err.message);
    } else {
      global.swagger = true;
      next();
    }
  }
};