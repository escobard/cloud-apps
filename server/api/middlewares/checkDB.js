import { cleanError } from "../utils";

function checkDB() {
  return async (req, res, next) => {
    if (!global.hasDB) {
      // TODO - improve with cleanError.js util
      return res
        .status(503)
        .json(cleanError({ message: "No database available!", status: 503 }));
    }
    return next();
  };
}

export default checkDB;
