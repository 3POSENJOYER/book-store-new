import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { ProductsService } from '../products/products.service';
import { getModelToken } from '@nestjs/mongoose';
import { CartItem } from './schemas/cart.schema';

describe('CartService', () => {
  let service: CartService;
  let cartModel: any;
  let productsService: any;

  // -------------------------
  //   ГОЛОВНИЙ mockCartModel
  // -------------------------
  const mockCartModel = {
    find: jest.fn(),
    findOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
    deleteOne: jest.fn(),
    deleteMany: jest.fn(),
  };

  // Конструктор new this.cartModel(dto)
  const mockCartModelConstructor = jest.fn().mockImplementation((dto) => ({
    ...dto,
    save: jest.fn().mockResolvedValue(dto),
  }));

  // Додаємо до нього методи Mongoose
  Object.assign(mockCartModelConstructor, mockCartModel);

  // -------------------------
  //  ProductsService MOCK
  // -------------------------
  const mockProductsService = {
    findOne: jest.fn((id) => {
      if (id === 1)
        return { productID: 1, name: 'A', toObject: () => ({ productID: 1 }) };
      if (id === 2)
        return { productID: 2, name: 'B', toObject: () => ({ productID: 2 }) };
      return null;
    }),
  };

  beforeEach(async () => {
    // Налаштовуємо відповіді моків для кожного тесту
    mockCartModel.find.mockReturnValue({
      exec: jest.fn().mockResolvedValue([
        { productID: 1, quantity: 2 },
        { productID: 2, quantity: 1 },
      ]),
    });

    mockCartModel.findOne.mockReturnValue({
      exec: jest.fn().mockResolvedValue(null),
    });

    mockCartModel.findOneAndUpdate.mockResolvedValue({
      productID: 1,
      quantity: 5,
    });

    mockCartModel.deleteOne.mockResolvedValue({ deletedCount: 1 });
    mockCartModel.deleteMany.mockResolvedValue({});

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: getModelToken(CartItem.name),
          useValue: mockCartModelConstructor, // ГОЛОВНИЙ МОК
        },
        {
          provide: ProductsService,
          useValue: mockProductsService,
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    cartModel = module.get(getModelToken(CartItem.name));
    productsService = module.get(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // -------------------------
  //         GET CART
  // -------------------------
  describe('getCart', () => {
    it('should return full cart with product info', async () => {
      const result = await service.getCart();

      expect(result.length).toBe(2);
      expect(productsService.findOne).toHaveBeenCalledWith(1);
      expect(productsService.findOne).toHaveBeenCalledWith(2);
      expect(cartModel.find).toHaveBeenCalled();
    });
  });

  

  // -------------------------
  //         UPDATE
  // -------------------------
  describe('updateQuantity', () => {
    it('should update quantity', async () => {
      const result = await service.updateQuantity(1, 5);

      expect(result).toEqual({ productID: 1, quantity: 5 });
      expect(cartModel.findOneAndUpdate).toHaveBeenCalled();
    });
  });

  // -------------------------
  //         REMOVE
  // -------------------------
  describe('removeFromCart', () => {
    it('should remove item', async () => {
      const result = await service.removeFromCart(1);

      expect(result).toEqual({ message: 'Item removed' });
      expect(cartModel.deleteOne).toHaveBeenCalledWith({ productID: 1 });
    });
  });

  // -------------------------
  //         CLEAR CART
  // -------------------------
  describe('clearCart', () => {
    it('should clear cart', async () => {
      const result = await service.clearCart();

      expect(result).toEqual({ message: 'Cart cleared' });
      expect(cartModel.deleteMany).toHaveBeenCalled();
    });
  });
});
