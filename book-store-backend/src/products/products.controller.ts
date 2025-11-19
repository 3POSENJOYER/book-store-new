// products/products.controller.ts (Оновлено)

import {
  Controller,
  Get,
  Param,
  NotFoundException, // <-- Імпортуємо для обробки 404
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): ProductDto[] {
    return this.productsService.findAll();
  }

  // Змініть тип повернення на ProductDto (без undefined)
  @Get(':id')
  findOne(@Param('id') id: string): ProductDto {
    const product = this.productsService.findOne(parseInt(id, 10));

    // 💡 Логіка обробки помилки:
    if (!product) {
      // Якщо продукт не знайдено, викидаємо виняток 404
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    // Якщо знайдено, повертаємо об'єкт (тепер TypeScript задоволений)
    return product;
  }
}
