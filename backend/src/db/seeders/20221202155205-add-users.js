'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "boaz.zheng@alumni.usp.br",
          password: "12345",
          employeeId: "1",
        },
        {
          email: "rodolfo@alumni.usp.br",
          password: "12345",
          employeeId: "2",
        },
        {
          email: "joyce@alumni.usp.br",
          password: "12345",
          employeeId: "3",
        },
        {
          email: "felipe@alumni.usp.br",
          password: "12345",
          employeeId: "4",
        },
        {
          email: "talitha@alumni.usp",
          password: "12345",
          employeeId: "5",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {
      [Op.or]: [
        { name: "Boaz" },
        { name: "Rodolfo" },
        { name: "Joyce" },
        { name: "Felipe" },
        { name: "Talitha" },
      ],
    });
  }
};
