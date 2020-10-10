import { cleanSwaggerError } from "../utils";

function swaggerValidation(err) {
  return async (err, req, res, next) => {
    if (err) {
      res.status(err.status);
      res.type("application/json");

      const cleanError = cleanSwaggerError(err);

      res.json(cleanError);
    } else {
      next();
    }
  };
}

export default swaggerValidation;
