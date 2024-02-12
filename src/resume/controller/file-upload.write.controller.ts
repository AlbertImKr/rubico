import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileUploadWriteService } from '../service/file-upload.write.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ProfileImageSizeValidatorPipe,
  ProfileImageTypeValidatorPipe,
} from '../../shared/pipes/profile-image-validation.pipe';
import { UserData } from '../../shared/decorators/auth.decorator';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import { IdResponse } from '../../shared/utils/response.dto';
import {
  PortfolioFileSizeValidatorPipe,
  PortfolioFileTypeValidatorPipe,
} from '../../shared/pipes/portfolio-file-validation.pipe';
import {
  ApiUploadPortfolioFile,
  ApiUploadProfileImage,
} from '../decorators/file-upload.api.decorator';

@Controller('files')
export class FileUploadWriteController {
  constructor(
    private readonly fileUploadWriteService: FileUploadWriteService,
  ) {}

  @ApiUploadProfileImage()
  @Post('profile-image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadProfileImage(
    @UploadedFile(
      new ProfileImageTypeValidatorPipe(),
      new ProfileImageSizeValidatorPipe(),
    )
    image: Express.Multer.File,
    @UserData() userData: LoginUserData,
  ): Promise<IdResponse> {
    return this.fileUploadWriteService.uploadProfileImage(image, userData.id);
  }

  @ApiUploadPortfolioFile()
  @Post('portfolio-file')
  @UseInterceptors(FileInterceptor('portfolioFile'))
  async uploadPortfolioFile(
    @UploadedFile(
      new PortfolioFileTypeValidatorPipe(),
      new PortfolioFileSizeValidatorPipe(),
    )
    portfolioFile: Express.Multer.File,
    @UserData() userData: LoginUserData,
  ): Promise<IdResponse> {
    return this.fileUploadWriteService.uploadPortfolioFile(
      portfolioFile,
      userData.id,
    );
  }
}
