// file to connect to sequelize
import { Sequelize } from "sequelize";
import { dbkeys } from "../../constants";

const { pgPort, pgHost, pgUser, pgDatabase, pgPassword } = dbkeys;

const sequelize = new Sequelize(pgDatabase, pgUser, pgPassword, {
  host: pgHost,
  port: pgPort,
  dialect: "postgres",
  define: {
    timestamps: false,
    schema: "notes",
  },
});
export default sequelize;
