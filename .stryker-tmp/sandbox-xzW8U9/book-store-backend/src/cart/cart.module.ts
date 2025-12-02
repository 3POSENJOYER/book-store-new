// @ts-nocheck
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ProductsModule } from '../products/products.module';
import { CartItem, CartSchema } from './schemas/cart.schema';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([{ name: CartItem.name, schema: CartSchema }]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
