import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

describe('CartController', () => {
  let controller: CartController;
  let service: CartService;

  const mockCartService = {
    getCart: jest.fn().mockResolvedValue([{ productID: 1, quantity: 2 }]),
    addToCart: jest.fn().mockImplementation((dto: AddToCartDto) => ({
      productID: dto.productID,
      quantity: dto.quantity,
    })),
    updateQuantity: jest
      .fn()
      .mockImplementation((id: number, quantity: number) => ({
        productID: id,
        quantity,
      })),
    removeFromCart: jest
      .fn()
      .mockResolvedValue({ message: 'Item removed' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        {
          provide: CartService,
          useValue: mockCartService,
        },
      ],
    }).compile();

    controller = module.get<CartController>(CartController);
    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getCart', () => {
    it('should return cart items', async () => {
      const result = await controller.getCart();
      expect(result).toEqual([{ productID: 1, quantity: 2 }]);
      expect(service.getCart).toHaveBeenCalled();
    });
  });

  describe('addToCart', () => {
    it('should add item to cart', async () => {
      const dto: AddToCartDto = { productID: 1, quantity: 3 };
      const res = await controller.addToCart(dto);
      expect(res).toEqual({ productID: 1, quantity: 3 });
      expect(service.addToCart).toHaveBeenCalledWith(dto);
    });
  });

  describe('updateQuantity', () => {
    it('should update the quantity of a product', async () => {
      const res = await controller.updateQuantity('5', 10);
      expect(res).toEqual({ productID: 5, quantity: 10 });
      expect(service.updateQuantity).toHaveBeenCalledWith(5, 10);
    });
  });

  describe('removeFromCart', () => {
    it('should remove item from cart', async () => {
      const res = await controller.removeFromCart('3');
      expect(res).toEqual({ message: 'Item removed' });
      expect(service.removeFromCart).toHaveBeenCalledWith(3);
    });
  });
});
