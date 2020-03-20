
/** Util to clean route errors
 * @return {object} status, message
 */

const cleanError = error => {
  const type = "Promise rejection error"
  console.log(type);
  console.log("Status: 503");
  console.log("Message: " + error.message);

  return {
    type,
    status: 503,
    description: error.message
  };
};

module.exports = cleanError;