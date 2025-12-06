import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { User } from './schemas/user.schema';

describe('AuthService', () => {
  let service: AuthService;
  let userModel;

  // Мокаємо mongoose-документ
  const mockUserDocument = (data) => ({
    ...data,
    save: jest.fn().mockResolvedValue(data),
  });

  beforeEach(async () => {
    userModel = {
      findOne: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getModelToken(User.name), useValue: userModel },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

 
  // -------- LOGIN --------
  describe('login', () => {
    it('should login user with correct credentials', async () => {
      const dto = { email: 'john@test.com', password: '1234' };

      userModel.findOne.mockResolvedValue({
        _id: '1',
        name: 'John',
        email: 'john@test.com',
        password: '1234',
      });

      const result = await service.login(dto);

      expect(result.message).toBe('Login successful');
      expect(result.user.email).toBe('john@test.com');
    });

    it('should throw UnauthorizedException for invalid password', async () => {
      userModel.findOne.mockResolvedValue({
        email: 'john@test.com',
        password: 'wrong',
      });

      await expect(
        service.login({ email: 'john@test.com', password: '1234' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if user not found', async () => {
      userModel.findOne.mockResolvedValue(null);

      await expect(
        service.login({ email: 'no@test.com', password: '1234' }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
