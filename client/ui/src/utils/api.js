import axios from "axios";

import { cleanError } from "./cleanError";

export const api = async (httpReq, url, headers, body) => {
  if (!httpReq) return "http request argument required";
  if (!url) return "url argument required";
  return axios[httpReq](url, body && body, headers && headers)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return cleanError(error);
    });
};
