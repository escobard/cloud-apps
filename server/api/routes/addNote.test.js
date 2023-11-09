import { Notes } from "../services/postgres"

jest.mock("../services/postgres").Notes;

describe("addNote route", () => {

  let note;

  beforeEach(done => {
    note = {
      user_id: 1,
      subject: "This is a sample note subject",
      note: "This is a sample note"
    };
    done();
  });

  afterEach(done => {
    done();
  });

  it(">> happy path, add note success", async () => {
    global.hasDB = true;

    jest.spyOn(Notes, "create").mockResolvedValue("Note added!");

    const { body, status } = await request(server).post("/").send(note);

    expect(status).toEqual(200);
    expect(body).toEqual("Note added!");
  });

/*  it(">> sad path, general promise rejection", async () => {
    global.hasDB = true;

    const { status, error } = await request(server).post("/").send(note);

    expect(status).toEqual(503);
    expect(error.text).toEqual(
      '{"type":"Promise rejection error","description":"connect ECONNREFUSED 127.0.0.1:5432"}'
    );
  });*/
});
