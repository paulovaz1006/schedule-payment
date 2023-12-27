import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { v4 as uuid} from 'uuid';

@Entity("address")
export class Address {
  @PrimaryColumn({default: uuid()})
  id: string;

  @Column()
  address: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  complement: string;

  @Column()
  zip_code: number;

  @Column()
  number: number;

  @Column({nullable: false})
  user_id:string

  @ManyToMany(() => User)
  @JoinColumn({name:"user_id"})
  user: User;

  constructor() {
    Object.assign(this, Address)
    if(!this.id) {
      this.id = uuid()
    }

  }
}