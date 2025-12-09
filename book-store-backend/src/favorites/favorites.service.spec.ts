import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesService } from './favorites.service';
import { getModelToken } from '@nestjs/mongoose';
import { Favorite } from './schemas/favorite.schema';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let model: any;

  const mockFavoriteModel = {
    findOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FavoritesService,
        {
          provide: getModelToken(Favorite.name),
          useValue: mockFavoriteModel,
        },
      ],
    }).compile();

    service = module.get<FavoritesService>(FavoritesService);
    model = module.get(getModelToken(Favorite.name));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUserFavorites', () => {
    it('should return array of product IDs', async () => {
      model.findOne.mockResolvedValue({ productIds: [1, 2, 3] });

      const result = await service.getUserFavorites('1');
      expect(result).toEqual([1, 2, 3]);
    });

    it('should return empty array if no favorites exist', async () => {
      model.findOne.mockResolvedValue(null);

      const result = await service.getUserFavorites('1');
      expect(result).toEqual([]);
    });
  });

  describe('addToFavorites', () => {
    it('should add product and return updated list', async () => {
      model.findOneAndUpdate.mockResolvedValue({
        productIds: [1, 5],
      });

      const result = await service.addToFavorites('1', 5);
      expect(result).toEqual([1, 5]);

      expect(model.findOneAndUpdate).toHaveBeenCalledWith(
        { userId: '1' },
        { $addToSet: { productIds: 5 } },
        { new: true, upsert: true },
      );
    });
  });

  describe('removeFromFavorites', () => {
    it('should remove product and return updated list', async () => {
      model.findOneAndUpdate.mockResolvedValue({
        productIds: [2, 3],
      });

      const result = await service.removeFromFavorites('1', 1);
      expect(result).toEqual([2, 3]);
    });

    it('should throw error when favorites not found', async () => {
      model.findOneAndUpdate.mockResolvedValue(null);

      await expect(service.removeFromFavorites('1', 10)).rejects.toThrow();
    });
  });
});
