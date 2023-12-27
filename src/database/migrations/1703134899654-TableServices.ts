import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class TableServices1703134899654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.createTable(
            new Table({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "float"
                    },
                    {
                        name: "description",
                        type: "varchar"
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
                ],
                foreignKeys: [
                    {
                        name: "fk_schedule_user",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
