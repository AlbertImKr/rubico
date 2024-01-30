import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadWriteService } from './file-upload.write.service';
import { ProfileImageWriteService } from './profile-image.write.service';
import { ConfigService } from '@nestjs/config';
import { ObjectId } from 'mongodb';
import { TestConstants } from '../../shared/test-utils/test.constants';
import { TestUtils } from '../../shared/test-utils/test.utils';

describe('파일 업로드 write 서비스', () => {
  let service: FileUploadWriteService;
  let profileImageWriteService: ProfileImageWriteService;
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
    configService = module.get<ConfigService>(ConfigService);
    fileUploadSolution = module.get<AWS.S3>('AWS_S3');
  });

  describe('파일 업로드', () => {
    it('파일 업로드 성공', async () => {
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
});
