import sequelize from "./sequelize";
import { Users, Notes } from "./models";
import authenticate from "./authenticate";

// no longer
authenticate(sequelize);

export { sequelize, authenticate, Users, Notes };
