import { checkDB } from "./";

describe("checkDB", function() {
  let req, res, spy;

  afterEach(() => {
    global.hasDB = false;
    global.dBError = "";
  });

  it(">> should call next() if db is available", async () => {
    const nextSpy = jest.fn();
    global.hasDB = true;

    await checkDB()({}, {}, nextSpy);
    expect(nextSpy).toHaveBeenCalledTimes(1)
  });

  it(">> should not call next() if db is unavailable", function() {
    const nextSpy = jest.fn();
    const req = mockRequest();
    const res = mockResponse();
    global.dBError = "test DB error";

    checkDB()(req, res, nextSpy);

    expect(res.status).toHaveBeenCalledWith(503);
    expect(res.json).toHaveBeenCalledWith("test DB error");
    expect(nextSpy).toHaveBeenCalledTimes(1)
  });
});