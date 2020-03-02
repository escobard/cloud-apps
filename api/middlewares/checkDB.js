const { sequelize } = require("../services/postgres");
/** Utility to connect to DB
 * @dev prevents API crashes when DB is unavailable
 */

module.exports = async (req, res, next) => {
  if (global.hasDB === false){
    return res.status(503).json(global.dbError);
  }else{
    next()
  }

}