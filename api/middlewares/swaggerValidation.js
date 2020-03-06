
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
      // TODO - need a util to format this string to improve its readability
      console.log("Message: " + err.message);
      res.json({status: err.status, description: err.message})
    } else {
      next();
    }
  }
};