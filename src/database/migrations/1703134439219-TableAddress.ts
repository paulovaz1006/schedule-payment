import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class TableAddress1703134439219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
            new Table({
                name: "address",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "neighborhood",
                        type: "varchar"
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "state",
                        type: "varchar"
                    },
                    {
                        name: "complement",
                        type: "varchar"
                    },
                    {
                        name: "zip_code",
                        type: "integer"
                    },
                    {
                        name: "number",
                        type: "integer"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_address_user",
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
