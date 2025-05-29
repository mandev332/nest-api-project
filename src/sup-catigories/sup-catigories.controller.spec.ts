import { Test, TestingModule } from '@nestjs/testing';
import { SupCatigoriesController } from './sup-catigories.controller';
import { SupCatigoriesService } from './sup-catigories.service';

describe('SupCatigoriesController', () => {
  let controller: SupCatigoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupCatigoriesController],
      providers: [SupCatigoriesService],
    }).compile();

    controller = module.get<SupCatigoriesController>(SupCatigoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
