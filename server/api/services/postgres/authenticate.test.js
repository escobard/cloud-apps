import { sequelize, authenticate, Users} from "./"

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

    sinon
      .stub(sequelize, "authenticate")
      .resolves();
    sinon.stub(Users, "findAll").resolves(users);

    const test = await authenticate(sequelize);

    expect(test).to.equal(users);
  });

  it(">> is able to create base user", async () => {

    sinon
      .stub(sequelize, "authenticate")
      .resolves();
    sinon.stub(Users, "findAll").resolves([]);
    sinon.stub(Users, "create").resolves("User created!");

    const test = await authenticate(sequelize);

    expect(test).to.equal("User created!");
  });

 it(">> throws unable to connect to DB error", async () => {

   sinon
     .stub(sequelize, "authenticate")
     .rejects('Random DB error');

   const test = await authenticate(sequelize);
   expect(test).to.equal('Unable to connect to the database: Random DB error');
 });
  it(">> throws unable to get users error", async () => {
    sinon
      .stub(sequelize, "authenticate")
      .resolves();

    sinon.stub(Users, "findAll").rejects("Random User findAll error");

    const test = await authenticate(sequelize);
    expect(test).to.equal("Unable to connect to findAll users: Random User findAll error");
  });
  it(">> throws unable to create users error", async () => {
    sinon
      .stub(sequelize, "authenticate")
      .resolves();
    sinon.stub(Users, "findAll").resolves([]);
    sinon.stub(Users, "create").rejects("Random User create error");

    const test = await authenticate(sequelize);
    expect(test).to.equal("Unable to create original user: Random User create error");
  });
});