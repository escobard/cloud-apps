export const postFormFields = [
  {
    name: "subject",
    label: "Subject",
    placeholder: "Enter a subject for your note",
    value: "",
    error: false
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter a subject for your note",
    value: "",
    error: false
  },
];

const environment =
  process.env.NODE_ENV === "production" ? "gcp" : "development";

console.log("environment:", process.env);

// expand in the future with more variants
const apiRouteController = process.env.REACT_APP_DOCKER_VARIANT === "nginx_routing" ? "/api" : "http://localhost:4000" ;

const apiRoot =
  environment === "gcp"
    ? "https://gcp.api.url"
    : apiRouteController;

console.log("root:", apiRoot);

export const apiRoutes = {
  postForm: `${apiRoot + "/postForm"}`
};

export const headers = { "Access-Control-Allow-Origin": "*" };
