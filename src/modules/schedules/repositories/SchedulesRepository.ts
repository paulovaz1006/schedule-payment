import { AppDataSource } from "../../../database/config";
import { Schedule } from "../../../database/entities/Schedule";

class SchedulesRepository {
  private scheduleRepository = AppDataSource.getRepository(Schedule);

  async list() {
    const schedule = await this.scheduleRepository.find()
    return schedule
  }

  async create(payload) {
    const schedule = await this.scheduleRepository.save(payload)
    return schedule
  }

  async findById(id) {
    const schedule = await this.scheduleRepository.findBy({id})
    return schedule
  }

  async update(payload, id) {
    const schedule = await this.findById(id)

    if(!schedule) {
      throw new Error(`Schedule invalid`)
    }
    const payloadToUpdate = {
      ...schedule[0],
      ...payload,
    }

    console.log(payloadToUpdate)
    await this.scheduleRepository.save(payloadToUpdate)
  }

  async delete(id) {   
    await this.scheduleRepository.delete(id)
  }
}

export {
  SchedulesRepository
}