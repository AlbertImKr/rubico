import { Test, TestingModule } from '@nestjs/testing';
import { ResumeWriteController } from './resume.write.controller';
import { ResumeWriteService } from '../service/resume.write.service';
import {
  MockDataSourceProvider,
  TestUtils,
} from '../../shared/test-utils/test.utils';
import { ProfileImageWriteService } from '../service/profile-image.write.service';
import { ResumeRegisterRequestDto } from '../dto/resume.request.dto';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import { ResumeRegisterDataTransformer } from '../transformers/resume.dto.transformer';

describe('ResumeWriteController', () => {
  let controller: ResumeWriteController;
  let service: ResumeWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumeWriteController],
      providers: [
        {
          provide: ResumeWriteService,
          useValue: {
            register: jest.fn(),
          },
        },
        MockDataSourceProvider,
        ProfileImageWriteService,
      ],
    }).compile();

    controller = module.get<ResumeWriteController>(ResumeWriteController);
    service = module.get<ResumeWriteService>(ResumeWriteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('이력서 등록', () => {
    it('이력서 등록 성공', async () => {
      // given
      const resumeRegisterRequest: ResumeRegisterRequestDto =
        TestUtils.resumeRegisterRequest;
      const userData: LoginUserData = TestUtils.loginUserData;
      const data = TestUtils.resumeRegisterData;
      jest.spyOn(service, 'register').mockResolvedValue(undefined);
      jest
        .spyOn(ResumeRegisterDataTransformer, 'transform')
        .mockReturnValue(data);

      // when
      await controller.register(resumeRegisterRequest, userData);

      // then
      expect(ResumeRegisterDataTransformer.transform).toHaveBeenCalledWith(
        resumeRegisterRequest,
        userData.id,
      );
      expect(service.register).toHaveBeenCalledWith(data);
    });
  });
});
