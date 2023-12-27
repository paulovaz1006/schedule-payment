import { Router } from "express";
import { AuthenticateController } from "../modules/authenticate/useCases/authenticateController";

const authenticateRouter = Router();
const authenticateController  = AuthenticateController.getInstance()

authenticateRouter.post('/login', authenticateController.sigIn);

export {
  authenticateRouter
}

