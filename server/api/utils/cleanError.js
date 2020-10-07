
/** Util to clean route errors
 * @return {object} status, message
 */

const cleanError = (error, type) => {

  const checkType = type ? type : "Promise rejection error";

  console.log(type);
  console.log("Status:" + error.status);
  console.log("Message: " + error.message);

  return {
    type: checkType,
    status: error.status,
    description: error.message
  };
};

export default cleanError;
