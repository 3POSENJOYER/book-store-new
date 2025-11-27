import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from '../products/products.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { CartItem, CartDocument } from './schemas/cart.schema';
import { Product, ProductDocument } from '../products/schemas/product.schema';

export type CartItemResponse = Product & { quantity: number };

@Injectable()
export class CartService {
  constructor(
    @InjectModel(CartItem.name) private cartModel: Model<CartItem>,
    private readonly productsService: ProductsService,
  ) {}

  async getCart(): Promise<CartItemResponse[]> {
    const cartItems = await this.cartModel.find().exec();

    const fullCartItems = await Promise.all(
      cartItems.map(
        async (item: CartDocument): Promise<CartItemResponse | null> => {
          const productDetails = await this.productsService.findOne(
            item.productID,
          );

          if (!productDetails) {
            return null;
          }

          return {
            ...(productDetails as ProductDocument).toObject(),
            quantity: item.quantity,
          };
        },
      ),
    );

    return fullCartItems.filter(
      (item): item is CartItemResponse => item !== null,
    );
  }

  async addToCart(dto: AddToCartDto) {
    const product = await this.productsService.findOne(dto.productID);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const existingItem = await this.cartModel.findOne({
      productID: dto.productID,
    });

    if (existingItem) {
      existingItem.quantity += dto.quantity;
      return existingItem.save();
    } else {
      const newItem = new this.cartModel(dto);
      return newItem.save();
    }
  }

  async updateQuantity(productID: number, quantity: number) {
    const updatedItem = await this.cartModel.findOneAndUpdate(
      { productID },
      { quantity },
      { new: true },
    );
    return updatedItem;
  }

  async removeFromCart(productID: number) {
    await this.cartModel.deleteOne({ productID });
    return { message: 'Item removed' };
  }

  async clearCart() {
    await this.cartModel.deleteMany({});
    return { message: 'Cart cleared' };
  }
}
