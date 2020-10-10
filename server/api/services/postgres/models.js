// file to add models to sequelize instance
import sequelize from "./sequelize";

export const Users = sequelize.import("./models/users");
export const Notes = sequelize.import("./models/notes");
