"use strict";

const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "managers",
      [
        {
          name: "Nídia",
          createdAt,
          updatedAt
        },
        {
          name: "Carlean",
          createdAt,
          updatedAt
        },
        {
          name: "Fábio",
          createdAt,
          updatedAt
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("managers", {
      [Op.or]: [{ name: "Nídia" }, { name: "Carlean" }, { name: "Fábio" }],
    });
  },
};
