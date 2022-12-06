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
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "Carlean",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "Fábio",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("managers", {
            [Op.or]: [{ name: "Nídia" }, { name: "Carlean" }, { name: "Fábio" }]
        });
    }
};
