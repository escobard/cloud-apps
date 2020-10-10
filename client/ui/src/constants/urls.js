/* istanbul ignore file */
const environment =
  process.env.NODE_ENV === "production" ? "gcp" : "development";

// expand in the future with more variants
const apiRouteController =
  process.env.REACT_APP_DOCKER_VARIANT === "nginx_routing"
    ? "/api"
    : "http://localhost:4000";

const apiRoot =
  environment === "gcp" ? "https://gcp.api.url" : apiRouteController;

export const apiRoutes = {
  addNote: `${`${apiRoot}`}`,
  getNotes: `${`${apiRoot}`}`
};
