const sequelize = require("./sequelize"),
  authenticate = require("./authenticate");

describe("DB Authentication", () => {
  it(">> is able to authenticate", async () => {
    let expectedResult = { success: true };
    let dbAuthStub = sinon.stub(sequelize, 'authenticate').resolves('Test');
    // var callback = sinon.spy();

    const test = await authenticate(sequelize);
    // console.log('TEST', sequelize.authenticate)
    // save.restore();
    //sinon.assert.calledWith(callback, null, expectedResult);
    //expect(test).to.equal("")
  });
  it(">> throws unable to connect to DB error", () => {
  });
  it(">> is able to create base user", () => {});
  it(">> throws unable to create user error", () => {});
});