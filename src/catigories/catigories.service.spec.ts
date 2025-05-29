import { Test, TestingModule } from '@nestjs/testing';
import { CatigoriesService } from './catigories.service';

describe('CatigoriesService', () => {
  let service: CatigoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatigoriesService],
    }).compile();

    service = module.get<CatigoriesService>(CatigoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
