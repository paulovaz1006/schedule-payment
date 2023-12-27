import { Response } from "express";
import { TUser } from "../types/TUser";
import { UserRepository } from "../../repositories/UserRepository";

export interface IUserRepository {
  list(): void;
  create(payload: TUser): Promise<Response>;
  update(payload:TUser, id: TUser['id']): Promise<Response>;
}