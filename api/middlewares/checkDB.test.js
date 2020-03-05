const checkDB = require("./checkDB");

describe("checkDB", function() {
  let req,res,spy, spy2;
  afterEach(()=>{
    global.hasDB = false;
  })
  it(">> should call next() if db is available", function() {
    let mw = checkDB();
    let nextSpy = sinon.spy();
    global.hasDB = true;

    mw({}, {}, nextSpy);
    expect(nextSpy.calledOnce).to.be.true;
  });
  it(">> should not call next() if db is unavailable", function() {
    let mw = checkDB();
    let nextSpy = sinon.spy();

    global.dbErrors = "test DB error"

    req = res = {};
    spy = res.status = res.json = sinon.spy();

    mw(req, res, nextSpy);

    sinon.assert.calledWith(spy, 503)
    sinon.assert.calledWith(spy, 'Unable to connect to the database: SequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:5432')
    expect(spy.calledTwice).to.equal(true);
  });
});