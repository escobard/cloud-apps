const swaggerValidation = require("./swaggerValidation");

describe("swaggerValidation", function() {
  let req,res,spy;

  it(">> should call next() if no swagger error is thrown", function() {
    let nextSpy = sinon.spy();

    swaggerValidation(null)(null, req, res, nextSpy);
    expect(nextSpy.calledOnce).to.be.true;
  });

  it(">> should throw swagger error with invalid requests", async () => {
    global.hasDB = true;
    const body = { user_id: "a"}
    request(server)
      .post("/addNote")
      .send(body)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.error.text).to.equal(
          '{"status":400,"description":["The \\"body\\" body parameter is invalid ({\\"user_id\\":\\"a\\"}) ","JSON Schema validation error. ","Data path: \\"\\" ","Schema path: \\"/required/1\\" ","Missing required property: subject"]}'
        );
      });
  });
});