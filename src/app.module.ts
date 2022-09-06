import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { ProductService } from './models/products.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mariadb",
      "host": "localhost",
      "username": "root",
      "password": "",
      "database": "online_store",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true,
  }),
  TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductService],
})
export class AppModule {}
