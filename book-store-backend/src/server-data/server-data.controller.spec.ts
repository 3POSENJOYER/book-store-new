import { Test, TestingModule } from '@nestjs/testing';
import { ServerDataController } from './server-data.controller';

describe('ServerDataController', () => {
  let controller: ServerDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerDataController],
    }).compile();

    controller = module.get<ServerDataController>(ServerDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
