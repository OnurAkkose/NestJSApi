import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './componies/company.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), CompanyModule,ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
