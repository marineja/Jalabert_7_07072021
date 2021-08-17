'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commentaires extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User,{
        foreignKey: {
          allowNull: false
        }, onDelete: 'CASCADE',
      }),
      models.Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }, onDelete: 'CASCADE',
      })
    }
  };
  commentaires.init({
    id: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    message: DataTypes.STRING,
    date: DataTypes.DATE,
    postid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'commentaires',
  });
  return commentaires;
};