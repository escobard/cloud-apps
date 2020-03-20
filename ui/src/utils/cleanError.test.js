import { cleanError } from "utils";

describe("formatDate tests", () => {
  it(">> should return formatter error", () => {
    const error = {
      status: 400,
      message:
        'The "body" body parameter is invalid ({"subject":"aasdfas","note":"asdfasdfsddsfasdasdfasdfsddsfasdasdfasdfsddsfasdas…dasdfasdfsddsfasdasdfasdfsddsfasdasdfasdfsddsfasd"}) ',
      schemaPath: 'Schema path: "/required/0" ',
      missingProp: "Missing required property: user_id"
    };
    const cleanErr = cleanError(error);
    expect(cleanErr).toEqual({});
  });
});
