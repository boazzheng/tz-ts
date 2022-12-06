"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "employees",
            [
                {
                    name: "Boaz",
                    startedAt: "2019-08-01",
                    birthday: "1994-03-25",
                    regime: "PJ",
                    managerId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "Rodolfo",
                    startedAt: "2012-01-01",
                    birthday: "1990-01-01",
                    regime: "CLT",
                    managerId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "Joyce",
                    startedAt: "2014-01-01",
                    birthday: "1990-01-01",
                    regime: "CLT",
                    managerId: "3",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "Felipe",
                    startedAt: "2019-01-01",
                    birthday: "1996-01-01",
                    regime: "PJ",
                    managerId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "Talitha",
                    startedAt: "2020-01-01",
                    birthday: "1998-03-01",
                    regime: "PJ",
                    managerId: "3",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("employees", {
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
