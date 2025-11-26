import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ServerDataController } from './server-data/server-data.controller';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [ProductsModule, AuthModule, CartModule],
  controllers: [AppController, ServerDataController],
  providers: [AppService],
})
export class AppModule {}
