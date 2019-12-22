import axios from "axios";
import { apiRoutes, headers } from "../constants";


/** Cleans up API errors OR API promise rejections
 * @dev refer to /utils/validation in the API
 * @name cleanError
 * @return clean error message
 **/

const cleanError = error => {
  let errors;
  let status;
  let message;

  // checks for api validation error
  if (error.response) {
    errors = error.response.data.errors;
    status = error.response.data.status;
    message = `API rejection: ${status} ${errors}`;
  }
  // handles other API errors
  else {
    message = `API rejection: ${error}`;
  }
  return message;
};

/** Sends POST request to API to addNote
 * @dev refer to the /addNote route in the API for request handling logic
 * @name addNote
 * @returns resolved promise || rejected promise
 **/

export const addNote = async request => {
  return await axios
    .post(apiRoutes.addNote, request, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return cleanError(error);
    });
};

/** Sends GET request to API to getNotes
 * @dev refer to the /getNotes route within the API request handling logic
 * @name getNotes
 * @returns resolved promise || rejected promise
 **/

export const getNotes = async () => {
  return await axios
      .get(apiRoutes.getNotes,{ headers })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return cleanError(error);
      });
};
