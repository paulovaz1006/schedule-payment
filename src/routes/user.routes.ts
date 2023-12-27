import { Router } from "express";
import { UserController } from "../modules/users/useCases/UserController";

const userRouter = Router();
const userController = new UserController()

userRouter.get('/users', userController.list);
userRouter.post('/users', userController.create);
userRouter.patch('/users/:id', userController.update);

export {
  userRouter
}

