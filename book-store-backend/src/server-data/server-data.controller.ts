// server-data/server-data.controller.ts

import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductDto } from '../products/dto/product.dto'; // Імпортуємо DTO продукту

// URL-шлях контролера має відповідати 'storeDataServer' з вашого фронтенду
@Controller('storeDataServer')
export class ServerDataController {
  @Post()
  @HttpCode(HttpStatus.OK) // Гарантуємо, що повертається 200 OK
  handleCartData(@Body() cartData: ProductDto[]): {
    message: string;
    receivedCount: number;
  } {
    console.log('--- Received Cart Data ---');
    console.log(cartData); // Тут будуть дані, які ви надсилаєте з addToCart

    // У реальному житті тут буде логіка:
    // 1. Валідація даних
    // 2. Збереження до бази даних (як замовлення або елементи кошика)
    // 3. Обчислення підсумкової ціни

    // Повертаємо відповідь, яку ваш фронтенд очікує отримати
    return {
      message: 'Cart data received successfully!',
      receivedCount: cartData.length,
    };
  }
}
