import swaggerValidation from "./swaggerValidation";

describe("swaggerValidation", function() {
  let req, res, spy;

  it(">> should call next() if no swagger error is thrown", function() {
    let nextSpy = sinon.spy();

    swaggerValidation(null)(null, req, res, nextSpy);
    expect(nextSpy.calledOnce).to.be.true;
  });

  it(">> should throw swagger error with invalid requests", async () => {
    global.hasDB = true;
    const body = { user_id: "a" };
    request(server)
      .post("/addNote")
      .send(body)
      .end((err, res) => {
        expect(res.status).to.equal(400);
      });
  });
});