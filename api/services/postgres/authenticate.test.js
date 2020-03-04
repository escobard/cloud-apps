const sequelize = require("./sequelize"),
  authenticate = require("./authenticate"),
  { Users } = require("./models");
global.request = require("supertest");
global.server = require("./index");
global.sinon = require("sinon");
global.expect = require("chai").expect;
describe("DB Authentication", () => {
  it('works ansyncronously', done => {
    setTimeout(() => {

      expect(true).to.equal(true)
      done()
    }, 4)
  })
  const mochaAsync = fn => {
    return async (done) => {
      try {
        await fn()
        done()
      } catch (err) {
        done(err)
      }
    }
  }
  it('uses es7 async/await', async () => {
    const testPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello')
      }, 4)
    })

    try {
      const result = await testPromise
      expect(result).to.equal('Hello')
    } catch(err) {
      console.log(err)
    }
  })

  it("Sample async/await mocha test using wrapper", async () => {
    let expectedResult = {success: true};
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

    const test = await authenticate(sequelize);

    userModel.restore();
    dbAuthStub.restore();
    sinon.assert.calledWith(dbAuthStub);
    sinon.assert.calledWith(userModel);
    console.log('test', test)
    //dbAuthStub.restore();
    // assert(dbAuthStub.calledWithMatch({ url: '/todo/42/items' }));
    //expect(test).to.equal("")
    // expect(test).to.equal(true);
  });
  it(">> is able to authenticate", async (done) => {
  done()
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