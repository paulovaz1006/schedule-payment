import { Request, Response } from "express";
import { AddressRepository } from "../repositories/AddressRepository";

class AddressController {
  async findById(req: Request, res:Response) {
    const {id} = req.params;
      const addressRepository = new AddressRepository()
    const listSchedules = await addressRepository.list();

    try {
      return res.status(200).json(listSchedules)
    } catch(error: any) {
      return res.status(400).json(error.message)
    }
  }

  async create(req: Request, res:Response) {

  }
  
  async update(req: Request, res:Response) {

  }
  
}

export {
  AddressController
}