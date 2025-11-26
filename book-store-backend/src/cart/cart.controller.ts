import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.getCart();
  }

  @Post()
  addToCart(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart(dto);
  }

  @Patch(':id')
  updateQuantity(@Param('id') id: string, @Body('quantity') quantity: number) {
    return this.cartService.updateQuantity(+id, quantity);
  }

  @Delete(':id')
  removeFromCart(@Param('id') id: string) {
    return this.cartService.removeFromCart(+id);
  }
}
