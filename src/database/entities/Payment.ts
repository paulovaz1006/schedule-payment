import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { v4 as uuid} from 'uuid';
import { Services } from "./Services";

@Entity("payment")
export class Payment {
  @PrimaryColumn({default: uuid()})
  id: string;

  @Column()
  type: string;

  @Column()
  status: boolean;

  @CreateDateColumn({default: new Date()})
  created_at: Date;

  @UpdateDateColumn({default: new Date()})
  updated_at: Date;

  @Column({nullable: false})
  user_id:string;

  @Column({nullable: false})
  service_id:string;

  @ManyToMany(() => User)
  @JoinColumn({name:"user_id"})
  user: User;

  @ManyToMany(() => Services)
  @JoinColumn({name:"service_id"})
  service: Services;

  constructor() {
    Object.assign(this, Payment)
    if(!this.id) {
      this.id = uuid()
    }

  }
}