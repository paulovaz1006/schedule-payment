import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { v4 as uuid} from 'uuid';

@Entity("services")
export class Services {
  @PrimaryColumn({default: uuid()})
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  city: string;

  @Column()
  description: string;

  @CreateDateColumn({default: new Date()})
  created_at: Date;

  @UpdateDateColumn({default: new Date()})
  updated_at: Date;


  @Column({nullable: false})
  user_id:string

  @ManyToMany(() => User)
  @JoinColumn({name:"user_id"})
  user: User;

  constructor() {
    Object.assign(this, Services)
    if(!this.id) {
      this.id = uuid()
    }

  }
}