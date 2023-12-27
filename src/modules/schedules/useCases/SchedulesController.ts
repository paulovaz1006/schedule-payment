import { Request, Response } from "express"
import { SchedulesRepository } from "../repositories/SchedulesRepository"

class SchedulesController {
  constructor() {}

  async list(request: Request, response: Response): Promise<any> {
    const scheduleRepository = new SchedulesRepository();
    const listSchedules = await scheduleRepository.list();

    try {
      return response.status(200).json(listSchedules)
    } catch(error: any) {
      return response.status(400).json(error.message)
    }
  }

  async create(request: Request, response: Response): Promise<any> {
    const scheduleRepository = new SchedulesRepository();
    const payload = request.body;
    const createSchedule = await scheduleRepository.create(payload);

    try {
      return response.status(200).json(createSchedule)
    } catch(error: any) {
      return response.status(400).json(error.message)
    }    
  }

  async update(request: Request, response: Response) {
    const scheduleRepository = new SchedulesRepository();
    const payload = request.body;
    const {id} = request.params;
    const createSchedule = await scheduleRepository.update(payload, id);

    try {
      return response.status(200).json(createSchedule)
    } catch(error: any) {
      return response.status(400).json(error.message)
    }
  }

  async delete(request: Request, response: Response) {
    const scheduleRepository = new SchedulesRepository();
    const {id} = request.params;
    const createSchedule = await scheduleRepository.delete(id);

    try {
      return response.status(200).json(createSchedule)
    } catch(error: any) {
      return response.status(400).json(error.message)
    }
  }
}

export { SchedulesController }