const { cleanError } = require("./");

describe("cleanError", () => {
  it(">> creates response object in the desired format", () => {
    const error = {
      message: "test message"
    };
    const resError = cleanError(error);
    expect(resError).to.deep.equal({
      status: 503,
      message: "test message"
    });
  });
});