// src/products/products.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';

// 1. Створюємо масив тестових товарів
const mockProductsArray = [
  {
    productID: 1,
    productName: 'Test Book 1',
    productPrice: 10,
    produtDescription: 'Desc 1',
  },
  {
    productID: 2,
    productName: 'Test Book 2',
    productPrice: 20,
    produtDescription: 'Desc 2',
  },
];

// 2. Створюємо MOCK для Mongoose Model
const mockProductModel = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  create: jest.fn().mockImplementation((dto: any) => dto),

  find: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockProductsArray),
  }),

  findOne: jest.fn().mockReturnValue({
    exec: jest.fn().mockImplementation(),
  }),

  countDocuments: jest.fn().mockResolvedValue(10),
  insertMany: jest.fn(),
};

describe('ProductsService', () => {
  let service: ProductsService;
  let model: typeof mockProductModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getModelToken(Product.name),
          useValue: mockProductModel,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    model = module.get(getModelToken(Product.name));
  });

  // --- ТЕСТ 2: Перевірка методу findAll() ---
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // --- ТЕСТ 2: Перевірка методу findAll() ---
  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await service.findAll();

      expect(result).toEqual(mockProductsArray);
      expect(model.find).toHaveBeenCalled();
    });
  });

  // --- ТЕСТ 3: Перевірка методу findOne() ---
  describe('findOne', () => {
    it('should return a single product by ID', async () => {
      const testId = 1;
      const expectedProduct = mockProductsArray[0];

      jest.spyOn(model, 'findOne').mockReturnValue({
        exec: jest.fn().mockResolvedValue(expectedProduct),
      });

      const result = await service.findOne(testId);

      expect(result).toEqual(expectedProduct);
      expect(model.findOne).toHaveBeenCalledWith({ productID: testId });
    });

    it('should return undefined if product not found', async () => {
      const testId = 999;

      jest.spyOn(model, 'findOne').mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });

      const result = await service.findOne(testId);
      expect(result).toBeUndefined();
    });
  });
});
