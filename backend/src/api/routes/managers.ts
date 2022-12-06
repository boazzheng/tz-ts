import { Router, Request, Response } from "express";

const managerRouter = Router();
import { ManagerAttr, Manager } from "../../db/models/manager";

managerRouter.post("/add", async (req: Request, res: Response) => {
    try {
        const payload: ManagerAttr = req.body;
        const result = await Manager.create(payload);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

export default managerRouter;
