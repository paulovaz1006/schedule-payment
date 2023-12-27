import { Router } from "express";
import { scheduleRouter } from "./schedule.routes";
import { userRouter } from "./user.routes";
import { authenticateRouter } from "./authenticate.routes";
import { addressRouter } from "./address.routes";

const router = Router();

router.use(scheduleRouter)
router.use(userRouter)
router.use(authenticateRouter)
router.use(addressRouter)

export {
  router
}

