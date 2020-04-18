import { cleanSwaggerError } from "./";

describe("cleanSwaggerError", () => {
  it(">> creates response object in the desired format", () => {
    const error = {
      message:
        'The "body" body parameter is invalid ({"user_id":"a"}) \n' +
        "JSON Schema validation error. \n" +
        'Data path: "" \n' +
        'Schema path: "/required/1" \n' +
        "Missing required property: subject",
      status: 400
    };
    const cleanError = cleanSwaggerError(error);
    expect(cleanError).toEqual({
      type: "Swagger validation error",
      status: 400,
      message:
        "The \"body\" body parameter is invalid ({\"user_id\":\"a\"}) ",
      dataPath: "Data path: \"\" ",
      schemaPath: "Schema path: \"/required/1\" ",
      description: "Missing required property: subject"
    });
  });
});