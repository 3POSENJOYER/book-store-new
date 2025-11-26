import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../products/products.service'; // Імпорт сервісу продуктів
import { AddToCartDto } from './dto/add-to-cart.dto';

interface CartItemStorage {
  productID: number;
  quantity: number;
}

@Injectable()
export class CartService {
  constructor(private readonly productsService: ProductsService) {}

  // Тимчасове сховище кошика
  private cart: CartItemStorage[] = [];

  // 1. Отримати кошик
  getCart() {
    const fullCartItems = this.cart.map((item) => {
      const productDetails = this.productsService.findOne(item.productID);

      if (!productDetails) {
        return null;
      }

      return {
        ...productDetails,
        quantity: item.quantity,
      };
    });

    return fullCartItems.filter((item) => item !== null);
  }

  // 2. Додати товар в кошик
  addToCart(dto: AddToCartDto) {
    const product = this.productsService.findOne(dto.productID);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const existingItem = this.cart.find((i) => i.productID === dto.productID);

    if (existingItem) {
      existingItem.quantity += dto.quantity;
    } else {
      this.cart.push({ productID: dto.productID, quantity: dto.quantity });
    }

    return { message: 'Item added to cart' };
  }

  // 3. Оновити кількість
  updateQuantity(productID: number, quantity: number) {
    const item = this.cart.find((i) => i.productID === productID);
    if (item) {
      item.quantity = quantity;
    }
    return { message: 'Quantity updated' };
  }

  // 4. Видалити з кошика
  removeFromCart(productID: number) {
    this.cart = this.cart.filter((item) => item.productID !== productID);
    return { message: 'Item removed' };
  }

  // 5. Очистити кошик
  clearCart() {
    this.cart = [];
  }
}
