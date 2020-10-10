const users = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

  return Users;
};

export default users;
