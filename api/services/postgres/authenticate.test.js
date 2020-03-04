const sequelize = require("./sequelize"),
  authenticate = require("./authenticate"),
  { Users } = require("./models");

describe("DB Authentication", () => {
  it("uses es7 async/await", async () => {

  });
  it(">> is able to authenticate", async () => {

    const users = [
      {
        id: 3,
        user_id: 1,
        subject: "This is a sample note subject",
        note: "This is a sample note",
        date: "a JavaScript generated date"
      }
    ];
    let dbAuthStub = sinon
      .stub(sequelize, "authenticate")
      .resolves();

    let userModel = sinon.stub(Users, "findAll").resolves(users);

    const test = await authenticate(sequelize);

    userModel.restore();
    dbAuthStub.restore();
    sinon.assert.calledWith(dbAuthStub);
    sinon.assert.calledWith(userModel);
    console.log('test', test)
    expect(test).to.equal(users);
  });
  /*
 it(">> throws unable to connect to DB error", async () => {
   var save = sinon.stub(sequelize, 'authenticate');
   var info = { name: 'test' };
   var expectedUser = {
     name: info.name,
     nameLowercase: info.name.toLowerCase()
   };

   let userModel = sinon.stub(Users, "findAll").resolves([
     {
       id: 3,
       user_id: 1,
       subject: "This is a sample note subject",
       note: "This is a sample note",
       date: "a JavaScript generated date"
     }
   ]);

   await authenticate(sequelize);

   save.restore();
   sinon.assert.calledWith(save, expectedUser);
 });
  */
  it(">> is able to create base user", () => {});
  it(">> throws unable to create user error", () => {});
});