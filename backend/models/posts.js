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
      models.posts.belongsTo(models.users, {
        foreignKey: 'userid', 
        onDelete: 'CASCADE'
      }),
      models.posts.hasMany(models.commentaires)
    }

    /*toJSON() {
      return { ...this.get(), id: undefined,  userid: undefined }
    } */

  };
  posts.init({
    
    userId: {
      type: DataTypes.INTEGER,
      references: {
         model: 'Users', 
         key: 'id', 
      },
      allowNull: false,
   },
    message: DataTypes.STRING,
    date: DataTypes.DATE,
    photo: {type: DataTypes.STRING, allowNull: true},
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};