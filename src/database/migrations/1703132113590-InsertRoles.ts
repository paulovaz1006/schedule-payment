import { MigrationInterface, QueryRunner, Table, getRepository } from "typeorm"
import { Role } from "../entities/Roles";
import { AppDataSource } from "../config";

export class InsertRoles1703132113590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {        
        await queryRunner.query(`INSERT INTO roles (id, name, code) VALUES (1, 'admin', 1), (2, 'client', 2)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
