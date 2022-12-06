"use strict";

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
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "rodolfo@alumni.usp.br",
                    password: "12345",
                    employeeId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "joyce@alumni.usp.br",
                    password: "12345",
                    employeeId: "3",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "felipe@alumni.usp.br",
                    password: "12345",
                    employeeId: "4",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "talitha@alumni.usp",
                    password: "12345",
                    employeeId: "5",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", {
            [Op.or]: [
                { name: "Boaz" },
                { name: "Rodolfo" },
                { name: "Joyce" },
                { name: "Felipe" },
                { name: "Talitha" }
            ]
        });
    }
};
