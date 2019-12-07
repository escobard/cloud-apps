import axios from "axios";
import { apiRoutes, headers } from "../constants";

// TODO - add commentary
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
 * @dev refer to the /getNotes route in the API for request handling logic
 * @name addNote
 * @returns resolved promise || rejected promise
 **/

export const getNotes = async request => {
  return await axios
      .get(apiRoutes.getNotes, { headers })
      .then(response => {
        return response;
      })
      .catch(error => {
        return cleanError(error);
      });
};
