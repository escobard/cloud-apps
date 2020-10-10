import { Users } from "./models";

const authenticate = (sequelize) => {
  return sequelize
    .authenticate()
    .then(() => {
      global.hasDB = true;
      console.info("Connection has been established successfully.");

      // TODO - this logic will be moved to the auth service with phase 5

      return Users.findAll()
        .then((values) => {
          const { hasDB } = global;
          if (hasDB === true && values.length === 0) {
            return Users.create({ email: "admin@admin" })
              .then((admin) => {
                return admin;
              })
              .catch((err) => {
                const error = `Unable to create original user: ${err}`;
                console.error(error);
                return error;
              });
          }
          return values;
        })
        .catch((err) => {
          const error = `Unable to connect to findAll users: ${err}`;
          console.error(error);
          return error;
        });
    })
    .catch((err) => {
      const error = `Unable to connect to the database: ${err}`;
      console.error(error);
      global.hasDB = false;
      global.dBError = error;
      return error;
    });
};

export default authenticate;
