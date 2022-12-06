"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "timesheets",
            [
                {
                    date: "2022-12-01",
                    init1: "00:00:00",
                    init2: "10:00:00",
                    end1: "00:00:00",
                    end2: "10:00:00",
					checked: false,
					employeeId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    date: "2022-12-01",
                    init1: "00:00:00",
                    init2: "10:00:00",
                    end1: "00:00:00",
                    end2: "10:00:00",
					checked: false,
					employeeId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    date: "2022-12-01",
                    init1: "00:00:00",
                    init2: "10:00:00",
                    end1: "00:00:00",
                    end2: "10:00:00",
					checked: false,
					employeeId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    date: "2022-11-01",
                    init1: "00:00:00",
                    init2: "10:00:00",
                    end1: "00:00:00",
                    end2: "10:00:00",
					checked: false,
					employeeId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    date: "2022-12-01",
                    init1: "00:00:00",
                    init2: "10:00:00",
                    end1: "00:00:00",
                    end2: "10:00:00",
					checked: false,
					employeeId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("users", {
            [Op.and]: [
                { init1: "00:00:00" },
                { init2: "10:00:00" }
            ]
        });
    }
};
