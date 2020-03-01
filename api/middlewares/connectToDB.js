const { sequelize } = require("../services/postgres");
/** Utility to connect to DB
 * @dev prevents API crashes when DB is unavailable
 */

module.exports = function(options) {
  return (req, res, next) => {
    return sequelize
      .authenticate()
      .then(() => {
        global.hasDB = true;
        console.log("Connection has been established successfully.");
        next();
      })
      .catch(err => {
        const error = "Unable to connect to the database: " + err;
        console.error(error);
        global.hasDB = false;
        res.status(503).json(error);
      });
  };
};