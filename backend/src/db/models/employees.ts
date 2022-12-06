import database from "..";
import Sequelize, { Model, Optional } from "sequelize";
import { User } from "./user";
import { TimeSheet } from "./timesheet";

export interface EmployeeAttr {
    id: string;
    name: string;
    startedAt: Date;
    birthday: Date;
    regime: string;
    managerId: Number;
}

/*
  EmployeeCreationAttr tells Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface EmployeeCreationAttr extends Optional<EmployeeAttr, "id"> {}

interface EmployeeInstance
    extends Model<EmployeeAttr, EmployeeCreationAttr>,
        EmployeeAttr {
    createdAt?: Date;
    updatedAt?: Date;
}

export const Employee = database.connection.define<EmployeeInstance>(
    "Employee",
    {
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
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        birthday: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        regime: {
            type: Sequelize.STRING(5),
            allowNull: false
        },
        managerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: "employees"
    }
);

Employee.hasOne(User, {
    sourceKey: "id",
    foreignKey: "employeeId",
    as: "user"
});

User.hasOne(Employee, {
    sourceKey: "employeeId",
    foreignKey: "id",
    as: "employee"
});

Employee.hasMany(TimeSheet, {
    sourceKey: "id",
    foreignKey: "employeeId",
    as: "timesheetEntry"
});

TimeSheet.belongsTo(Employee, {
    foreignKey: "employeeId",
    as: "employee"
});
