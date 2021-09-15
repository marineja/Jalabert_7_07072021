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
      models.commentaires.belongsTo(models.users,{
        foreignKey: {
          allowNull: false
        }, onDelete: 'CASCADE',
      }),

      models.commentaires.belongsTo(models.posts, {
        foreignKey: {
          allowNull: false
        }, onDelete: 'CASCADE',
      })
    }

    toJSON() {
      return { ...this.get(), id: undefined, userid: undefined, postid: undefined }
    }

  };
  commentaires.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER,
      references: {
         model: 'Users', 
         key: 'id', 
      },
      allowNull: false,
   },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: DataTypes.DATE,
    postid: {
      type: DataTypes.INTEGER,
      references: {
         model: 'Posts',
         key: 'id', 
      },
      allowNull: false,
   }
  }, {
    sequelize,
    modelName: 'commentaires',
  });
  return commentaires;
};