import express, { Application, Request, Response } from "express";
import cors from "cors";
import { getErrorMessage } from "./src/utils/common";
import { corsOptions } from "./src/utils/corsOptions";
import database from "./src/db";

import userRouter from "./src/api/routes/users";
import employeeRouter from "./src/api/routes/employees";
import managerRouter from "./src/api/routes/managers";
import tsRouter from "./src/api/routes/timesheets";

const app: Application = express();
const port = process.env.PORT || 3000;
// const isDev = process.env.NODE_ENV === "development";

// Body parsing Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/employee", employeeRouter);
app.use("/manager", managerRouter);
app.use("/user", userRouter);
app.use("/timesheet", tsRouter);

database.connection
    .sync()
    // .sync({force: true})
    .then(() => {
        console.log("Connected to Postgres.");
    })
    .catch((err) => console.log(getErrorMessage(err)));

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
} catch (error) {
    console.log(getErrorMessage(error));
}
