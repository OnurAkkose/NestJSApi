import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: 'productNest',
    synchronize: true,
    entities:  ["dist/**/*.entity{.ts,.js}"],
    username: 'postgres',
    password: 'Postgre.2897'
};