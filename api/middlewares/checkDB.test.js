const checkDB = require("./checkDB");

describe("checkDB", function() {
  let req,res,spy;
  afterEach(()=>{
    global.hasDB = false;
    global.dBError = "";
  })
  it(">> should call next() if db is available", function() {
    let nextSpy = sinon.spy();
    global.hasDB = true;

    checkDB({}, {}, nextSpy);
    expect(nextSpy.calledOnce).to.be.true;
  });
  it(">> should not call next() if db is unavailable", function() {
    let nextSpy = sinon.spy();

    global.dBError = "test DB error"

    req = res = {};
    spy = res.status = res.json = sinon.spy();

    checkDB(req, res, nextSpy);

    sinon.assert.calledWith(spy, 503)
    sinon.assert.calledWith(spy, "test DB error")
    expect(spy.calledTwice).to.equal(true);
  });
});