/** Utility to connect to DB
 * @dev prevents API crashes when DB is unavailable
 */

module.exports = async (req, res, next) => {
  res.status(err.status)
  res.type('json');
  return res.send(err.message);
  console.log('Swagger validator error')
  console.log('Status: ' + err.status)
  console.log('Message: ' + err.message)
  next()
}