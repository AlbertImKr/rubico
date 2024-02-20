import { Test, TestingModule } from '@nestjs/testing';
import { ResumeWriteService } from './resume.write.service';
import {
  MockDataSourceProvider,
  TestUtils,
  mockEntityManager,
} from '../../shared/test-utils/test.utils';
import { ProfileImageWriteService } from './profile-image.write.service';
import { ResumeRegisterData } from '../dto/resume.data.dto';
import { ResumeEntity } from '../entities/resume.entity';

describe('ResumeWriteService', () => {
  let resumeService: ResumeWriteService;
  let profileImageService: ProfileImageWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResumeWriteService,
        MockDataSourceProvider,
        {
          provide: ProfileImageWriteService,
          useValue: {
            findById: jest.fn(),
          },
        },
      ],
    }).compile();

    resumeService = module.get<ResumeWriteService>(ResumeWriteService);
    profileImageService = module.get<ProfileImageWriteService>(
      ProfileImageWriteService,
    );
  });

  it('should be defined', () => {
    expect(resumeService).toBeDefined();
  });

  describe('register', () => {
    it('이력서를 등록한다', async () => {
      // given
      const data: ResumeRegisterData = TestUtils.resumeRegisterData;
      jest
        .spyOn(profileImageService, 'findById')
        .mockResolvedValue(TestUtils.profileImage);
      jest.spyOn(resumeService, 'save').mockResolvedValue(TestUtils.resume);

      // when
      await resumeService.register(data);

      // then
      expect(profileImageService.findById).toHaveBeenCalledWith(
        data.profileImageId,
      );
      expect(resumeService.save).toHaveBeenCalledTimes(1);
    });
  });

  describe('save', () => {
    it('이력서를 저장한다', async () => {
      // given
      jest
        .spyOn(mockEntityManager, 'save')
        .mockResolvedValueOnce(TestUtils.resumeEntity);

      // when
      await resumeService.save(TestUtils.resume);

      // then
      expect(mockEntityManager.save).toHaveBeenCalledWith(
        ResumeEntity,
        TestUtils.resumeEntity,
      );
      expect(mockEntityManager.save).toHaveBeenCalledTimes(1);
    });
  });
});
