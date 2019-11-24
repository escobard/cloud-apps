const values = (sequelize, DataTypes) => {
  
  const values = sequelize.define('values', {
    number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  });
  return values;
};
module.exports.default = values;
