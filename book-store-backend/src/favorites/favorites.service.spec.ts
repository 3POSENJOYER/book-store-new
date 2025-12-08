import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { FavoritesService } from './favorites.service';
import { Favorite } from './schemas/favorite.schema';

const mockFavoriteModel = {
  find: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue([
      { userID: '123', productID: 1 },
      { userID: '123', productID: 2 },
    ]),
  }),

  create: jest.fn().mockImplementation((dto) => dto),

  deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }),
};

describe('FavoritesService', () => {
  let service: FavoritesService;
  let model: typeof mockFavoriteModel;

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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return user favorites', async () => {
      const result = await service.getAll('123');
      expect(result.length).toBe(2);
      expect(model.find).toHaveBeenCalledWith({ userID: '123' });
    });
  });

  describe('add', () => {
    it('should add a new favorite', async () => {
      const result = await service.add('123', 5);

      expect(result).toEqual({ userID: '123', productID: 5 });
      expect(model.create).toHaveBeenCalledWith({
        userID: '123',
        productID: 5,
      });
    });
  });

  describe('remove', () => {
    it('should remove a favorite', async () => {
      const result = await service.remove('123', 1);

      expect(result).toEqual({ deletedCount: 1 });
      expect(model.deleteOne).toHaveBeenCalledWith({
        userID: '123',
        productID: 1,
      });
    });
  });
});
