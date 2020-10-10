const notes = (sequelize, DataTypes) => {
  return sequelize.define("notes", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  });
};

export default notes;
