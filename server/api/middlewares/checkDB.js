/** Middelware to check connection to DB
 * @dev prevents API crashes when DB is unavailable
 */

function checkDB(){
  return async (req, res, next) => {
    if (global.hasDB === false){
      res.status(503)
      // TODO - improve with cleanError.js util
      return res.json(global.dBError);
    }else{
      next()

    }
  }
};

export default checkDB;