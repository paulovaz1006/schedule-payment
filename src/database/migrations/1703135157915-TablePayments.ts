import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class TablePayments1703135157915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "payments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "boolean"
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
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                     {
                        name: "service_id",
                        type: "uuid"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_payment_user",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_service_user",
                        columnNames: ["service_id"],
                        referencedTableName: "services",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
