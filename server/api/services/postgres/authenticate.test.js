import { sequelize, authenticate, Users, Notes } from "./";

describe("DB Authentication", () => {

  const users = [
    {
      id: 3,
      user_id: 1,
      subject: "This is a sample note subject",
      note: "This is a sample note",
      date: "a JavaScript generated date"
    }
  ];

  it(">> is able to authenticate", async () => {
    jest.spyOn(sequelize, "authenticate").mockResolvedValue("");
    jest.spyOn(Users, "findAll").mockResolvedValue(users);

    const test = await authenticate(sequelize);

    expect(test).toEqual(users);
  });

  it(">> is able to create base user", async () => {
    jest.spyOn(sequelize, "authenticate").mockResolvedValue("");
    jest.spyOn(Users, "findAll").mockResolvedValue([]);
    jest.spyOn(Users, "create").mockResolvedValue("User created!");

    const test = await authenticate(sequelize);

    expect(test).toEqual("User created!");
  });

  it(">> throws unable to connect to DB error", async () => {
    jest.spyOn(sequelize, "authenticate").mockRejectedValue("Random DB error");

    const test = await authenticate(sequelize);

    expect(test).toEqual("Unable to connect to the database: Random DB error");
  });

  it(">> throws unable to get users error", async () => {
    jest.spyOn(sequelize, "authenticate").mockResolvedValue("");
    jest.spyOn(Users, "findAll").mockRejectedValue("Random User findAll error");

    const test = await authenticate(sequelize);

    expect(test).toEqual(
      "Unable to connect to findAll users: Random User findAll error"
    );
  });

  it(">> throws unable to create users error", async () => {
    jest.spyOn(sequelize, "authenticate").mockResolvedValue("");
    jest.spyOn(Users, "findAll").mockResolvedValue([]);
    jest.spyOn(Users, "create").mockRejectedValue("Random User create error");

    const test = await authenticate(sequelize);

    expect(test).toEqual(
      "Unable to create original user: Random User create error"
    );
  });

});
