import { Request, Response } from 'express';
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';
import { AuthenticateRepository } from '../repositories/authenticateRepository';

interface IUserRequest {
  cpf: string;
  email: string;
  password: string;
}

class AuthenticateController {
  private static instance: AuthenticateController;

  public static getInstance() {
    if(!AuthenticateController.instance) {
      this.instance = new AuthenticateController();
    }

    return this.instance;
  }

  async sigIn(req: Request, res:Response) {
    const {cpf, email, password} = req.body;
    const userIsEmpty = !cpf && !email;
    const passwordIsEmpty = !password;
    const authenticateRepository= new AuthenticateRepository()
    const userAlreadyExists = await authenticateRepository.getUser({cpf, email})
    console.log(userAlreadyExists)
    console.log(!userAlreadyExists || userIsEmpty || passwordIsEmpty)
    if(!userAlreadyExists || userIsEmpty || passwordIsEmpty) {
      
      return res.status(403).json({message:"username or password invalid"})
    }
 
    const passwordMatch = await compare(password, userAlreadyExists.password)
      
    if(!passwordMatch) {
      return res.status(403).json({message:"username or password invalid"})
    }

    const payloadToJwt = {
      cpf: userAlreadyExists.cpf,
      email: userAlreadyExists.email,
      phone: userAlreadyExists.phone,
    }
    const token = sign({...payloadToJwt}, 'teste', {
      subject: userAlreadyExists.id.toString(),
      expiresIn: "20s"
    })

    return res.status(200).json({token:token})
  }
}

export {
  AuthenticateController
}