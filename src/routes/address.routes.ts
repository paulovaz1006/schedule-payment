import { Router } from "express";
import { AddressController } from "../modules/address/useCases/AddressController";

const addressRouter = Router();
const addressController = new AddressController()

addressRouter.get('/address/:id', addressController.findById);
addressRouter.post('/address', addressController.create);
addressRouter.patch('/address/:id', addressController.update);

export {
  addressRouter
}

