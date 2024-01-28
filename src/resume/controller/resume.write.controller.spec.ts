import { Test, TestingModule } from '@nestjs/testing';
import { ResumeWriteController } from './resume.write.controller';
import { ResumeWriteService } from '../service/resume.write.service';
import { MockDataSourceProvider } from '../../shared/test-utils/test.utils';

describe('ResumeWriteController', () => {
  let controller: ResumeWriteController;
  let service: ResumeWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumeWriteController],
      providers: [ResumeWriteService, MockDataSourceProvider],
    }).compile();

    controller = module.get<ResumeWriteController>(ResumeWriteController);
    service = module.get<ResumeWriteService>(ResumeWriteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
