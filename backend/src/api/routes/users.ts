import { Router, Request, Response } from "express";

const userRouter = Router();
import { UserAttr, User } from '../../db/models/user';

userRouter.post('/add', async (req: Request, res: Response) => {
    const payload: UserAttr = req.body;
    const result = await User.create(payload);
    return res.status(200).send(result);
});

export default userRouter;