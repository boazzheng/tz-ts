import express, { Application, Request, Response } from "express";
import cors from "cors";
import { getErrorMessage } from "./src/utils/common";
import { corsOptions } from "./src/utils/corsOptions";
import database from "./src/db";

import { User } from "./src/db/models/user";
import { Employee } from "./src/db/models/employees";
import { Manager } from "./src/db/models/manager";

import userRouter from "./src/api/routes/users";
import employeeRouter from "./src/api/routes/employees";
import managerRouter from "./src/api/routes/manager";

const app: Application = express();
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === "development";

// Body parsing Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/employee", employeeRouter);
app.use("/manager", managerRouter);

database.connection
    .sync({ force: isDev })
    .then(() => {
        console.log("Connected to Postgres.");
        Employee.sync({ alter: isDev });
        User.sync({ alter: isDev });
        Manager.sync({ alter: isDev });
    })
    .catch((err) => console.log(getErrorMessage(err)));

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
} catch (error) {
    console.log(getErrorMessage(error));
}
