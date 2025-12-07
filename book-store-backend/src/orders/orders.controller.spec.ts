import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

describe('OrdersController', () => {
  let controller: OrdersController;
  let service: OrdersService;

  const mockOrdersService = {
    create: jest.fn().mockResolvedValue({
      userID: '123',
      items: [{ productID: 1 }],
      price: 100,
    }),

    findAll: jest.fn().mockResolvedValue([
      { id: '1', price: 100 },
      { id: '2', price: 200 },
    ]),

    findOne: jest.fn().mockResolvedValue({ id: '1', price: 100 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        {
          provide: OrdersService,
          useValue: mockOrdersService,
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an order', async () => {
      const dto = {
        userID: '123',
        items: [{ productID: 1 }],
        price: 100,
      };

      const result = await controller.create(dto);

      expect(result).toEqual(dto);
      expect(service.create).toHaveBeenCalledWith(
        dto.userID,
        dto.items,
        dto.price,
      );
    });
  });

  describe('getAll', () => {
    it('should return all orders', async () => {
      const result = await controller.getAll();

      expect(result.length).toBe(2);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('getOne', () => {
    it('should return one order by ID', async () => {
      const result = await controller.getOne('1');

      expect(result).toEqual({ id: '1', price: 100 });
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });
});
