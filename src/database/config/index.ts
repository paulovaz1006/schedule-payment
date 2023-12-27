import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "pvaz",
    password: "pvaz",
    database: "schedule",
    synchronize: true,
    logging: false,
    entities: ['src/database/entities/*.ts'],
    migrations: ["src/database/migrations/*.ts"],
    subscribers: [],
})
