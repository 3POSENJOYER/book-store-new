import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';

describe('FavoritesController', () => {
  let controller: FavoritesController;
  let service: FavoritesService;

  const mockFavoritesService = {
    getAll: jest.fn().mockResolvedValue([{ productID: 1 }]),
    add: jest.fn().mockResolvedValue({ userID: '123', productID: 5 }),
    remove: jest.fn().mockResolvedValue({ deletedCount: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesController],
      providers: [
        {
          provide: FavoritesService,
          useValue: mockFavoritesService,
        },
      ],
    }).compile();

    controller = module.get<FavoritesController>(FavoritesController);
    service = module.get<FavoritesService>(FavoritesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getFavorites', () => {
    it('should return user favorites', async () => {
      const result = await controller.getFavorites('123');

      expect(result).toEqual([{ productID: 1 }]);
      expect(service.getAll).toHaveBeenCalledWith('123');
    });
  });

  describe('add', () => {
    it('should add product to favorites', async () => {
      const result = await controller.add('123', '5');

      expect(result).toEqual({ userID: '123', productID: 5 });
      expect(service.add).toHaveBeenCalledWith('123', 5);
    });
  });

  describe('remove', () => {
    it('should remove from favorites', async () => {
      const result = await controller.remove('123', '7');

      expect(result).toEqual({ deletedCount: 1 });
      expect(service.remove).toHaveBeenCalledWith('123', 7);
    });
  });
});
