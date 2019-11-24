const users = (sequelize, DataTypes) => {
  
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });
  return users;
};
module.exports.default = users;
