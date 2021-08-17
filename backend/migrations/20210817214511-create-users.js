'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      email: {
        allowNull:false
        type:Datatypes.STRING,
         //pour vérifier que le mail soit unique
         validate: {
          isEmail:true
        },
        unique: {
          args: true,
          msg: 'Adresse email déjà utilisée!'
        }
      },
      username: {
        allowNull:false
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
        // est ce que je met par defaut false?
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};