import { Router } from "express";
import { SchedulesController } from "../modules/schedules/useCases/SchedulesController";

const scheduleRouter = Router();
const schedulesController  = new SchedulesController()

scheduleRouter.get('/schedules', schedulesController.list)
scheduleRouter.post('/schedules', schedulesController.create)
scheduleRouter.patch('/schedules/:id', schedulesController.update)
scheduleRouter.delete('/schedules/:id', schedulesController.delete)

export {
  scheduleRouter
}

