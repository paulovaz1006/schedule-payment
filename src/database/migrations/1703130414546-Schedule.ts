import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Schedule1703130414546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
            new Table({
                name: "schedules",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "date",
                        type: "timestamp",
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
                    }
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
        await queryRunner.dropTable('schedules')
    }

}
