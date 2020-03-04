const sequelize = require("./sequelize"),
  authenticate = require("./authenticate"),
  { Users } = require("./models");

describe("DB Authentication", () => {
  it(">> is able to authenticate", async () => {
    let expectedResult = { success: true };
    let dbAuthStub = sinon
      .stub(sequelize, "authenticate")
      .resolves(expectedResult);
    let userModel = sinon.stub(Users, "findAll").resolves([
      {
        id: 3,
        user_id: 1,
        subject: "This is a sample note subject",
        note: "This is a sample note",
        date: "a JavaScript generated date"
      }
    ]);
    var callback = sinon.spy();

    const test = await authenticate(sequelize);
    console.log("TEST", test);
    dbAuthStub.restore();
    //sinon.assert.calledWith(callback, expectedResult);
    //expect(test).to.equal("")
  });
  it(">> throws unable to connect to DB error", () => {});
  it(">> is able to create base user", () => {});
  it(">> throws unable to create user error", () => {});
});