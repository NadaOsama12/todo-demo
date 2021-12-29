module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('users', {
    user_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {});

  User.prototype.toJSON = function () {
    let values = this.get();

    return values;
  };

  User.associate = function (models) {
    User.hasMany(models.todos, { foreignKey: 'user_id'})
  };

  return User;
};
