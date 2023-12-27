import { AppDataSource } from "../../../database/config";
import { User } from "../../../database/entities/User";

class AuthenticateRepository {
  private userRepository = AppDataSource.getRepository(User);

  async getUser({cpf, email}){
    const userAlreadyExists = await this.userRepository.findOne({
      where: [{cpf}, {email}],
    })

    return userAlreadyExists
  }
}

export { AuthenticateRepository }