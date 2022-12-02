'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
