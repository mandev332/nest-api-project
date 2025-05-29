import { Test, TestingModule } from '@nestjs/testing';
import { SupCatigoriesService } from './sup-catigories.service';

describe('SupCatigoriesService', () => {
  let service: SupCatigoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupCatigoriesService],
    }).compile();

    service = module.get<SupCatigoriesService>(SupCatigoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
