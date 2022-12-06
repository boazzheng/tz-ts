import database from "..";
import Sequelize, { Model, Optional } from "sequelize";

export interface TSAttr {
    id: Number;
    date: Date;
    init1: Date;
    end1: Date;
    init2: Date;
    end2: Date;
    checked: Boolean;
    employeeId: Number;
}

/*
  TSCreationAttr tells Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface TSCreationAttr extends Optional<TSAttr, "id"> {}

interface TSInstance extends Model<TSAttr, TSCreationAttr>, TSAttr {
    createdAt?: Date;
    updatedAt?: Date;
}

export const TimeSheet = database.connection.define<TSInstance>(
    "timesheets",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        init1: {
            type: Sequelize.TIME,
            allowNull: false
        },
        end1: {
            type: Sequelize.TIME,
            allowNull: false
        },
        init2: {
            type: Sequelize.TIME,
            allowNull: false
        },
        end2: {
            type: Sequelize.TIME,
            allowNull: false
        },
        checked: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        employeeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: "timesheets",
        initialAutoIncrement: "1"
    }
);
