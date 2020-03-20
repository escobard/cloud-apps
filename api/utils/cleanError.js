
/** Util to clean route errors
 * @return {object} status, message
 */

const cleanError = error => {
  console.log("Promise rejection error");
  console.log("Status: 503");
  console.log("Message: " + error.message);

  return {
    status: 503,
    message: error.message
  };
};

module.exports = cleanError;