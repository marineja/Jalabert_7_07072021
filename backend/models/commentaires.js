'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentaire extends Model { 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Commentaire.belongsTo(models.User,{ 
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })

      Commentaire.belongsTo(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE'
      })
    }
  };

  Commentaire.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commentaire',
  });
  return Commentaire;
};