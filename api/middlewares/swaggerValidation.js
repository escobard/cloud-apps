/** Middleware to return swagger validation errors
 * @dev throws an error if a request doesn't match our Note.yaml swagger validation
 */

import { cleanSwaggerError } from "../utils"

function swaggerValidation(err){
  return async (err, req, res, next) => {
    if (err) {
      res.status(err.status);
      res.type("application/json");

      console.log(err);

      const cleanError = cleanSwaggerError(err);

      res.json(cleanError);
    } else {
      next();
    }
  }
}

export default swaggerValidation;