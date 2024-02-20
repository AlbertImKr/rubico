import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadWriteService } from '../service/file-upload.write.service';
import { FileUploadWriteController } from './file-upload.write.controller';
import { TestUtils } from '../../shared/test-utils/test.utils';
import { LoginUserData } from '../../auth/dto/auth.data.dto';

describe('FileUploadWriteController', () => {
  let controller: FileUploadWriteController;
  let service: FileUploadWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileUploadWriteController],
      providers: [
        {
          provide: FileUploadWriteService,
          useValue: {
            uploadProfileImage: jest.fn(),
            uploadPortfolioFile: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FileUploadWriteController>(
      FileUploadWriteController,
    );
    service = module.get<FileUploadWriteService>(FileUploadWriteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('프로필 이미지 업로드', () => {
    it('프로필 이미지 업로드 성공', async () => {
      // given
      const image = TestUtils.fileOfProfileImage;
      const userData: LoginUserData = TestUtils.loginUserData;
      const idResponse = TestUtils.idResponse;
      jest.spyOn(service, 'uploadProfileImage').mockResolvedValue(idResponse);

      // when
      await controller.uploadProfileImage(image, userData);

      // then
      expect(service.uploadProfileImage).toHaveBeenCalledWith(
        image,
        userData.id,
      );
    });
  });

  describe('포트폴리오 파일 업로드', () => {
    it('포트폴리오 파일 업로드 성공', async () => {
      // given
      const portfolioFile = TestUtils.fileOfPortfolioFile;
      const userData: LoginUserData = TestUtils.loginUserData;
      const idResponse = TestUtils.idResponse;
      jest.spyOn(service, 'uploadPortfolioFile').mockResolvedValue(idResponse);

      // when
      await controller.uploadPortfolioFile(portfolioFile, userData);

      // then
      expect(service.uploadPortfolioFile).toHaveBeenCalledWith(
        portfolioFile,
        userData.id,
      );
    });
  });
});
