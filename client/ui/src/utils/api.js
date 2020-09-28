import axios from "axios";

import { apiRoutes, headers } from "../constants";
import { cleanError } from "utils";

// TODO - refactor this to an `api` function that can send GET / POST requests via URL argument for phase 4 for
//  scalability
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

export const api = async (httpReq, url, headers, body) => {
  if (!httpReq) return "http request argument required";
  if (!url) return "url argument required";
  return axios[httpReq](url, body && body, headers && headers)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return cleanError(error);
    });
};
