// products/products.controller.ts (Оновлено)

import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): ProductDto[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ProductDto {
    const product = this.productsService.findOne(parseInt(id, 10));

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }
}
