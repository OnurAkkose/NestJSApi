import { Company } from './company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { CompanyService } from "./campony.service";
import { CompanyController } from "./company.controller";


@Module({
    imports:[TypeOrmModule.forFeature([Company])],
    controllers: [CompanyController],
    providers: [CompanyService]
})
export class CompanyModule {

}