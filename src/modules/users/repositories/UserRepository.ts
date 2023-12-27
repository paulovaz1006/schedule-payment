import { AppDataSource } from "../../../database/config"
import { User } from "../../../database/entities/User"
import { TUser } from "../dto/types/TUser";

class UserRepository {
  private userRepository = AppDataSource.getRepository(User);

  async list():Promise<TUser[]> {
    const listUser = await this.userRepository.find();
    return listUser;
  }

  async getByCpf(cpf) {
    const listUser = await this.userRepository.findBy({cpf});
    return listUser;
  }

  async create(payload:TUser) {
    const save = await this.userRepository.save(payload);
    return save
  }

  async update(payload:TUser, id:TUser['id']) {
    const findUnique = await this.userRepository.findOneBy({id});
    const newValues = {
      ...findUnique,
      ...payload
    }

    const save = await this.userRepository.save(newValues);
    return save
  }
}

export {
  UserRepository
}