import sequelize from "./sequelize"
import { Users, Notes } from "./models";
import authenticate from "./authenticate"

authenticate(sequelize)

export {
  sequelize,
  Users,
  Notes
}
