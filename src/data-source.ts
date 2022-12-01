import "reflect-metadata"
import { DataSource } from "typeorm"
import { SistemaVAC } from "./entity/SistemaVAC"
import { UserVAC } from "./entity/UserVAC"

/*
export const AppDataSource = new DataSource({
    
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
*/

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "cwb@2022",
    database: "Faculdade",
    entities: [UserVAC, SistemaVAC],
    synchronize: true,
    logging:false
    
})