import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';

describe('FavoritesController', () => {
  let controller: FavoritesController;
  let service: FavoritesService;

  const mockFavoritesService = {
    getUserFavorites: jest.fn(),
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn(),
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /favorites', () => {
    it('should return favorites list', async () => {
      mockFavoritesService.getUserFavorites.mockResolvedValue([1, 2]);

      const result = await controller.getFavorites();
      expect(result).toEqual([1, 2]);
      expect(service.getUserFavorites).toHaveBeenCalledWith('1');
    });
  });

  describe('POST /favorites/:id', () => {
    it('should add product to favorites', async () => {
      mockFavoritesService.addToFavorites.mockResolvedValue([1, 2, 3]);

      const result = await controller.addFavorite('3');
      expect(result).toEqual([1, 2, 3]);
      expect(service.addToFavorites).toHaveBeenCalledWith('1', 3);
    });
  });

  describe('DELETE /favorites/:id', () => {
    it('should remove product from favorites', async () => {
      mockFavoritesService.removeFromFavorites.mockResolvedValue([1]);

      const result = await controller.removeFavorite('2');
      expect(result).toEqual([1]);
      expect(service.removeFromFavorites).toHaveBeenCalledWith('1', 2);
    });
  });
});
