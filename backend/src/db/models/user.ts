import database from "..";
import Sequelize, { Model, Optional } from "sequelize";

export interface UserAttr {
  id: Number;
  email: string;
  password: string;
  employeeId: Number;
}

/*
  UserCreationAttr tells Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface UserCreationAttr extends Optional<UserAttr, "id"> {}

interface UserInstance extends Model<UserAttr, UserCreationAttr>, UserAttr {
  createdAt?: Date;
  updatedAt?: Date;
}

export const User = database.connection.define<UserInstance>(
  "User",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employeeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "User",
    initialAutoIncrement: "1",
  }
);
