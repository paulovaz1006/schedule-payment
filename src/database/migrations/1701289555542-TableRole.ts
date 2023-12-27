import { MigrationInterface, QueryRunner, Table, getRepository } from "typeorm"
import { Role } from "../entities/Roles";
import { AppDataSource } from "../config";

export class TableRole1701289555542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
            new Table({
                name: "roles",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "code",
                        type: "integer",
                    },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles')
    }

}
