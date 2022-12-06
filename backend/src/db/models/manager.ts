import database from "..";
import Sequelize, { Model, Optional } from "sequelize";
import { Employee } from "./employees";

export interface ManagerAttr {
    id: number;
    name: string;
}

/*
  ManagerCreationAttr tells Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface ManagerCreationAttr extends Optional<ManagerAttr, "id"> {}

interface ManagerInstance
    extends Model<ManagerAttr, ManagerCreationAttr>,
        ManagerAttr {
    createdAt?: Date;
    updatedAt?: Date;
}

export const Manager = database.connection.define<ManagerInstance>(
    "managers",
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
        }
    },
    {
		timestamps: true,
        freezeTableName: true,
        tableName: "managers"
    }
);

Manager.hasMany(Employee, {
    sourceKey: "id",
    foreignKey: "managerId",
    as: "employees"
});

Employee.belongsTo(Manager, {
    foreignKey: "managerId",
    as: "manager"
});
