/* istanbul ignore file */

const apiRoot =
  process.env.REACT_APP_DOCKER_VARIANT === "nginx_routing"
    ? "/api"
    : "http://localhost:4000";

export const apiRoutes = {
  addNote: `${`${apiRoot}`}`,
  getNotes: `${`${apiRoot}`}`
};
