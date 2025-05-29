import { Test, TestingModule } from '@nestjs/testing';
import { CatigoriesController } from './catigories.controller';
import { CatigoriesService } from './catigories.service';

describe('CatigoriesController', () => {
  let controller: CatigoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatigoriesController],
      providers: [CatigoriesService],
    }).compile();

    controller = module.get<CatigoriesController>(CatigoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
