import { Test, TestingModule } from '@nestjs/testing';
import { ResumeWriteService } from './resume.write.service';

describe('ResumeWriteService', () => {
  let service: ResumeWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResumeWriteService],
    }).compile();

    service = module.get<ResumeWriteService>(ResumeWriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
