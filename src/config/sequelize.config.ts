import { SequelizeModuleOptions } from "@nestjs/sequelize";

export class SequelizeConfig {
 
    databaseInfo(): SequelizeModuleOptions {
        return {
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'pr0dut05-4p1',
            database: 'nest_estudo',
            autoLoadModels: true,
            synchronize: true
        } as SequelizeModuleOptions;
    }
}