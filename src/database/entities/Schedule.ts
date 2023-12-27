import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { v4 as uuid} from 'uuid';

@Entity("schedules")
export class Schedule {
  @PrimaryColumn({default: uuid()})
  id: string;

  @Column({nullable: false})
  date: Date;

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
    Object.assign(this, Schedule)
    if(!this.id) {
      this.id = uuid()
    }

  }
}