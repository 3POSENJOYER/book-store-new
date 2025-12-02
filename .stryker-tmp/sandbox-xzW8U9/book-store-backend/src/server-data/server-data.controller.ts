// @ts-nocheck
// server-data/server-data.controller.ts

import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductDto } from '../products/dto/product.dto';

@Controller('storeDataServer')
export class ServerDataController {
  @Post()
  @HttpCode(HttpStatus.OK)
  handleCartData(@Body() cartData: ProductDto[]): {
    message: string;
    receivedCount: number;
  } {
    console.log('--- Received Cart Data ---');
    console.log(cartData);

    return {
      message: 'Cart data received successfully!',
      receivedCount: cartData.length,
    };
  }
}
