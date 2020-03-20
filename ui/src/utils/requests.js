import axios from "axios";

import { apiRoutes, headers } from "../constants";
import { cleanError } from "utils";

/** Sends POST request to API to addNote
 * @dev refer to the /addNote route in the API for request handling logic
 * @returns resolved promise || rejected promise
 * */

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
 * @returns resolved promise || rejected promise
 * */

export const getNotes = async () => {
  return await axios
    .get(apiRoutes.getNotes, { headers })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return cleanError(error);
    });
};
