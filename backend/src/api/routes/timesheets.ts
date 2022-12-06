import { Router, Request, Response } from "express";
import { Op } from "sequelize";

const tsRouter = Router();
import { TSAttr, TimeSheet } from "../../db/models/timesheet";

tsRouter.post("/add", async (req: Request, res: Response) => {
    const payload: TSAttr = { ...req.body, date: new Date() };
    const result = await TimeSheet.create(payload);
    return res.status(200).send(result);
});

tsRouter.get(
    "/:employeeId/:month/:year",
    async (req: Request, res: Response) => {
        const employeeId = req.params.employeeId;
        const initMonth = +req.params.month - 1; // month count starts from 0!!!
        const endMonth = initMonth === 11 ? 1 : initMonth; // checking for december
        const initYear = +req.params.year;
        const endYear =
            initMonth === 11 ? +req.params.year + 1 : +req.params.year;
        const startDate = new Date(initYear, initMonth, 1);
        const endDate = new Date(endYear, endMonth, 1);

        const result = await TimeSheet.findAll({
            where: {
                [Op.and]: [
                    {
                        date: {
                            [Op.and]: {
                                [Op.gte]: startDate,
                                [Op.lt]: endDate
                            }
                        }
                    },
                    { employeeId }
                ]
            }
        });
        return res.status(200).send(result);
    }
);

tsRouter.put("/edit/:tsId", async (req: Request, res: Response) => {
    const tsId = req.params.tsId;
    const result = await TimeSheet.findByPk(tsId);
    const payload: TSAttr = { ...req.body, date: new Date() };
    if (result) {
        result.update(payload).then((result) => res.status(200).send(result));
    }
});

tsRouter.delete("/delete/:id", async (req: Request, res: Response) => {
    const result = await TimeSheet.findByPk(req.params.id);
    if (result) {
        result.destroy();
        return res.status(200).send();
    }
});

export default tsRouter;
