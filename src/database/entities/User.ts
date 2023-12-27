import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToMany, JoinColumn} from "typeorm"
import {v4 as uuid} from 'uuid'
import { Role } from "./Roles";

@Entity("users")
export class User {
    @PrimaryColumn({default: uuid()})
    id: string;
    
    @Column({ nullable: false,  type: 'varchar' })
    name: string;

    @Column({ nullable: false,  type: 'varchar' })
    password: string;

    @Column()
    email: string;

    @Column({ nullable: false,  type: 'bigint' })
    cpf: number;

    @Column({ nullable: false, type: 'bigint' })
    phone: number;

    @CreateDateColumn({default: new Date()})
    created_at: Date;

    @UpdateDateColumn({default: new Date()})
    updated_at: Date;

    @Column()
    role_id: number;

    @ManyToMany(() => Role)
    @JoinColumn({name:"role_id"})
    role: Role;

    constructor() {
        Object.assign(this, User);

        if (!this.id) {
            this.id = uuid();
        }

        if (!this.role_id) {
            this.role_id = 2;
        }
    }
}




