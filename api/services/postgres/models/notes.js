const notes = (sequelize, DataTypes) => {
  
  const Notes = sequelize.define('notes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    user: {
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
    
  });
  
  Notes.associate = models => {
    Notes.belongsTo(models.User)
  }
  
  return Notes;
};
module.exports.default = notes;
