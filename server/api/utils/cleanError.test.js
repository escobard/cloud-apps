import { cleanError } from "./";

describe("cleanError", () => {
  it(">> creates response object in the desired format", () => {
    const error = {
      message: "test message"
    };
    const resError = cleanError(error);
    expect(resError).toEqual({
      status: 503,
      description: "test message",
      type: "Promise rejection error"
    });
  });
});