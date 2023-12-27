import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity("roles")
export class Role {
  @PrimaryColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column()
  code: number;

  constructor() {
    Object.assign(this, Role)
  }
}