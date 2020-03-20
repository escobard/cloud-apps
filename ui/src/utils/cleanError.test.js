import { cleanError } from "utils";

describe("cleanError tests", () => {
  it(">> should return formatter error", () => {
    const error = {
      response: {
        data: {
          status: 400,
          message:
            'The "body" bodsy parameter is invalid' +
            ' ({"subject":"test subject","note":"test note"}) ',
          schemaPath: 'Schema path: "/required/0" ',
          missingProp: "Missing required property: user_id"
        }
      }
    };
    const cleanErr = cleanError(error);
    expect(cleanErr).toEqual(
      'API rejection: Status 400 - undefined - The "body" bodsy parameter is invalid ({"subject":"test subject","note":"test note"}) '
    );
  });
});
