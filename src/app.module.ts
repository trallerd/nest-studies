import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "username": "root",
      "password": "",
      "database": "online_store",
      "entities": ["dist/**/*.entities{.ts,.js}"],
      "synchronize": true,
      "logging": true,
      "subscribers": [],
      "migrations": []
  }),
  ],
  controllers: [AppController, ProductsController],
})
export class AppModule {}
