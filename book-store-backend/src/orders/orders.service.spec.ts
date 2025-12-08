import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { OrdersService } from './orders.service';
import { Order } from './schemas/order.schema';

const mockOrderModel = {
  create: jest.fn().mockImplementation((dto) => dto),

  find: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue([
      { id: '1', userID: '123', price: 100 },
      { id: '2', userID: '124', price: 200 },
    ]),
  }),

  findById: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue({ id: '1', userID: '123', price: 100 }),
  }),
};

describe('OrdersService', () => {
  let service: OrdersService;
  let model: typeof mockOrderModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: getModelToken(Order.name),
          useValue: mockOrderModel,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    model = module.get(getModelToken(Order.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new order', async () => {
      const dto = {
        userID: '123',
        items: [{ productID: 1 }],
        price: 100,
      };

      const result = await service.create(dto.userID, dto.items, dto.price);

      expect(result).toEqual(dto);
      expect(model.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      const result = await service.findAll();
      expect(result.length).toBe(2);
      expect(model.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return one order by ID', async () => {
      const result = await service.findOne('1');

      expect(result).toEqual({ id: '1', userID: '123', price: 100 });
      expect(model.findById).toHaveBeenCalledWith('1');
    });
  });
});
