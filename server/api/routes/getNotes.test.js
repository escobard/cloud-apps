const { Notes } = require("../services/postgres/models");

jest.mock("../services/postgres").Notes;

describe("getNotes route", () => {

  const users = [
    {
      id: 3,
      user_id: 1,
      subject: "This is a sample note subject",
      note: "This is a sample note",
      date: "a JavaScript generated date"
    }
  ];

  afterEach(done => {
    global.hasDB = null;
    global.environment = null;
    done();
  });

  it(">> happy path, get all users success", async () => {
    global.hasDB = true;
    jest.spyOn(Notes, "findAll").mockResolvedValue(users);

    const { body, status } = await request(server).get("/");

    expect(status).toEqual(200);
    expect(body).toEqual(users);
  });

/*  it(">> sad path, general promise rejection", async () => {
    global.hasDB = true;

    const { error, status } = await request(server).get("/");

    expect(status).toEqual(503);
    expect(error.text).toEqual(
      '{"type":"Promise rejection error","description":"connect ECONNREFUSED 127.0.0.1:5432"}'
    );
  });*/
});
