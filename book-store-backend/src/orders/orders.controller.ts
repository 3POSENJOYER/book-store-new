import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() dto: any) {
    return this.ordersService.create(dto.userID, dto.items, dto.price);
  }

  @Get()
  async getAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }
}
