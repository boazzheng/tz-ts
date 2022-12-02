import { Router, Request, Response } from "express";

const employeeRouter = Router();
import { EmployeeAttr, Employee } from "../../db/models/employees";

employeeRouter.post("/add", async (req: Request, res: Response) => {
    try {
        const payload: EmployeeAttr = req.body;
        const result = await Employee.create(payload);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

export default employeeRouter;
