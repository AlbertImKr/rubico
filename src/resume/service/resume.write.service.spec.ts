import { Test, TestingModule } from '@nestjs/testing';
import { ResumeWriteService } from './resume.write.service';
import { MockDataSourceProvider } from '../../shared/test-utils/test.utils';
import { ProfileImageWriteService } from './profile-image.write.service';

describe('ResumeWriteService', () => {
  let service: ResumeWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResumeWriteService,
        MockDataSourceProvider,
        ProfileImageWriteService,
      ],
    }).compile();

    service = module.get<ResumeWriteService>(ResumeWriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
