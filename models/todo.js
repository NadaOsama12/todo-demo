// const { Sequelize, ForeignKeyConstraintError } = require("sequelize/types");
const { DataTypes } = require("sequelize")

module.exports = function (sequelize, DataTypes) {
  const Todo = sequelize.define('todos', {
    todo_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
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

  Todo.prototype.toJSON = function () {
    let values = this.get();

    return values;
  };

  Todo.associate = function (models) {
    Todo.belongsTo(models.users, { foreignKey: 'user_id'})
  };

  return Todo;
};
