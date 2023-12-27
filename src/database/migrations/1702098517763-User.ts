import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1702098517763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "cpf",
                        type: "integer",
                        isUnique: true
                    },
                    {
                        name: "phone",
                        type: "integer",
                        isUnique: true
                    },
                     {
                        name: "role_id",
                        type: "integer",                  
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "varchar",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_user_role",
                        columnNames: ["role_id"],
                        referencedTableName: "roles",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}

