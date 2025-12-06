import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    register: jest.fn(),
    login: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // -------- REGISTER --------
  it('should call AuthService.register', async () => {
    const dto = { name: 'John', email: 'john@test.com', password: '1234' };
    mockAuthService.register.mockResolvedValue({ message: 'ok' });

    const result = await controller.register(dto);

    expect(mockAuthService.register).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ message: 'ok' });
  });

  // -------- LOGIN --------
  it('should call AuthService.login', async () => {
    const dto = { email: 'john@test.com', password: '1234' };
    mockAuthService.login.mockResolvedValue({ message: 'login ok' });

    const result = await controller.login(dto);

    expect(mockAuthService.login).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ message: 'login ok' });
  });
});
