import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadWriteService } from './file-upload.write.service';
import { ProfileImageWriteService } from './profile-image.write.service';
import { ConfigService } from '@nestjs/config';
import { ObjectId } from 'mongodb';
import { TestConstants } from '../../shared/test-utils/test.constants';
import { TestUtils } from '../../shared/test-utils/test.utils';
import { PortfolioFileWriteService } from './portfolio-file.write.service';
import { ProfileImageUploadFailedError } from '../../shared/exception/error/profile-image.error';

describe('파일 업로드 write 서비스', () => {
  let service: FileUploadWriteService;
  let profileImageWriteService: ProfileImageWriteService;
  let profileFileWriteService: PortfolioFileWriteService;
  let configService: ConfigService;
  let fileUploadSolution: AWS.S3;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FileUploadWriteService,
        {
          provide: ProfileImageWriteService,
          useValue: {
            register: jest.fn(),
          },
        },
        {
          provide: PortfolioFileWriteService,
          useValue: {
            register: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: 'AWS_S3',
          useValue: {
            upload: jest.fn().mockImplementation(() => ({
              promise: jest.fn().mockResolvedValue({
                Location: TestConstants.PROFILE_IMAGE_URL,
              }),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<FileUploadWriteService>(FileUploadWriteService);
    profileImageWriteService = module.get<ProfileImageWriteService>(
      ProfileImageWriteService,
    );
    profileFileWriteService = module.get<PortfolioFileWriteService>(
      PortfolioFileWriteService,
    );
    configService = module.get<ConfigService>(ConfigService);
    fileUploadSolution = module.get<AWS.S3>('AWS_S3');
  });

  describe('프로필 이미지 업로드', () => {
    it('프로필 이미지 업로드 성공', async () => {
      // given
      const userId = new ObjectId();
      const file: Express.Multer.File = TestUtils.profileImageFile;
      jest.spyOn(configService, 'get').mockReturnValue('test-bucket');
      jest
        .spyOn(profileImageWriteService, 'register')
        .mockResolvedValue(new ObjectId());

      // when
      await service.uploadProfileImage(file, userId);

      // then
      expect(profileImageWriteService.register).toHaveBeenCalled();
      expect(fileUploadSolution.upload).toHaveBeenCalled();
      expect(configService.get).toHaveBeenCalled();
    });
  });

  describe('포트폴리오 파일 업로드', () => {
    it('포트폴리오 파일 업로드 성공', async () => {
      // given
      const userId = new ObjectId();
      const file: Express.Multer.File = TestUtils.fileOfPortfolioFile;
      jest.spyOn(configService, 'get').mockReturnValue('test-bucket');
      jest
        .spyOn(profileFileWriteService, 'register')
        .mockResolvedValue(new ObjectId());

      // when
      await service.uploadPortfolioFile(file, userId);

      // then
      expect(profileFileWriteService.register).toHaveBeenCalled();
      expect(fileUploadSolution.upload).toHaveBeenCalled();
      expect(configService.get).toHaveBeenCalled();
    });
  });

  it('파일 업로드 실패', async () => {
    // given
    const file: Express.Multer.File = TestUtils.profileImageFile;
    const userId = new ObjectId();
    jest.spyOn(configService, 'get').mockReturnValue('test-bucket');
    jest.spyOn(fileUploadSolution, 'upload').mockImplementation(() => {
      throw new ProfileImageUploadFailedError();
    });

    // when, then
    await expect(service.uploadProfileImage(file, userId)).rejects.toThrow(
      ProfileImageUploadFailedError,
    );
  });
});
