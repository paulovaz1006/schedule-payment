import { Response,Request } from 'express';
import bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/UserRepository';

class UserController {  
  private userRepository: UserRepository;

  constructor(userRepository?: UserRepository) {
    this.userRepository = userRepository
  }

  async list(req: Request, res:Response): Promise<Response> {    
    const userRepository = new UserRepository()
    const listSchedules = await userRepository.list();

    try {
      return res.status(200).json(listSchedules)
    } catch(error: any) {
      return res.status(400).json(error.message)
    }
  }

  async create(req: Request, res:Response): Promise<Response> { 
    const userRepository = new UserRepository()
    const payload = req.body;
    
    if(!payload.role_id) {
      payload["role_id"] = 2
    }

    try {
      const existUser =  await userRepository.getByCpf(payload.cpf)

      if(existUser.length) {
        return res.status(400).json({
          message: 'User already exist'
        })
      }

      const hash = await bcrypt.hash(payload.password, 10)
      await userRepository.create({...payload, password: hash})

      return res.status(201).send()
    } catch(error) {
      return res.status(400).json(error.message)
    }
  }


  async update(req: Request, res:Response): Promise<Response> {
    const userRepository = new UserRepository()
    const payload = req.body;
    const {id} = req.params;
    const updateUser = await userRepository.update(payload, id);

    try {
      return res.status(200).json(updateUser)
    } catch(error: any) {
      return res.status(400).json(error.message)
    }
  }
}

export { UserController }
