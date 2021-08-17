'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }, onDelete: 'CASCADE'
      }),
        models.Post.hasMany(models.Comment)
    }
  };
  posts.init({
    id: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    message: DataTypes.STRING,
    date: DataTypes.DATE,
    photo: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};