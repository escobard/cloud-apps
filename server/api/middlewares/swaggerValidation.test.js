import { swaggerValidation } from "./";

describe("swaggerValidation", function() {
  beforeEach(() => {
    global.hasDB = true;
  });

  it(">> should call next() if no swagger error is thrown", function() {
    let nextSpy = jest.fn();

    swaggerValidation(null)(null, {}, {}, nextSpy);
    expect(nextSpy).toHaveBeenCalledTimes(1);
  });

  it(">> should throw swagger error with invalid requests", async () => {
    const body = { user_id: "a" };
    const req = mockRequest(body);
    const res = mockResponse();
    const err = {
      status: 503,
      message:
        'test'
    };

    swaggerValidation(err)(err, req, res, {});

    expect(res.status).toHaveBeenCalledWith(503);
    expect(res.json).toHaveBeenCalledWith({
      dataPath: undefined,
      description: undefined,
      message:
        'test',
      schemaPath: undefined,
      status: 503,
      type: "Swagger validation error"
    });
  });
});
