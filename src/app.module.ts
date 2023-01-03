import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { ProductService } from './models/products.service';
import { AdminModule } from './admin/admin.module';
import { User } from './models/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserService } from './models/user.service';
import { CartModule } from './cart/cart.module';

@Global()
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
    TypeOrmModule.forFeature([Product, User]),
    AdminModule,
    AuthModule,
    CartModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductService, UserService],
  exports: [ProductService, UserService],
})
export class AppModule { }
