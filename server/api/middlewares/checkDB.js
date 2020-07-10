/** Middelware to check connection to DB
 * @dev prevents API crashes when DB is unavailable
 */

function checkDB(){
  return async (req, res, next) => {
    console.log('CALL')
    if (!global.hasDB){
      // TODO - improve with cleanError.js util
      return res.status(503).json('No database available!');
    }else{
      next()

    }
  }
};

export default checkDB;
