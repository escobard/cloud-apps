
/** Cleans up API errors OR API promise rejections
 * @dev refer to /utils/validation in the API
 * @return clean error message
 * */

export const cleanError = error => {
  let type;
  let status;
  let message;
  let description;

  // checks for api validation error
  console.log("ERROR", error.response.data)
  if (error.response) {
    description = error.response.data.message;
    status = error.response.data.status;
    type = error.response.data.type;
    message = `API rejection: Status ${status} - ${type} - ${description}`;
  }
  // handles other API errors
  else {
    message = `API rejection: ${error}`;
  }
  return message;
};
