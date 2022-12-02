'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      startedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      regime: {
        type: Sequelize.STRING(5),
        allowNull: false
      },
      managerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }),
  down: async (queryInterface, Sequelize) =>
    await queryInterface.dropTable('employees')
}
