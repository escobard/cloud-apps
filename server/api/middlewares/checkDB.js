/** Middelware to check connection to DB
 * @dev prevents API crashes when DB is unavailable
 */
import { cleanError } from "../utils";

function checkDB() {
  return async (req, res, next) => {
    console.log("CALL");
    if (!global.hasDB) {
      // TODO - improve with cleanError.js util
      return res
        .status(503)
        .json(cleanError({ message: "No database available!", status: 503 }));
    } else {
      next();
    }
  };
}

export default checkDB;
