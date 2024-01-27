import { Test, TestingModule } from '@nestjs/testing';
import { ResumeWriteController } from './resume.write.controller';

describe('ResumeWriteController', () => {
  let controller: ResumeWriteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumeWriteController],
    }).compile();

    controller = module.get<ResumeWriteController>(ResumeWriteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
