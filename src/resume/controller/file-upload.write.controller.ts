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

@Controller('files')
export class FileUploadWriteController {
  constructor(
    private readonly fileUploadWriteService: FileUploadWriteService,
  ) {}

  @Post('profile-image')
  @UseInterceptors(FileInterceptor('image'))
  async upload(
    @UploadedFile(
      new ProfileImageTypeValidatorPipe(),
      new ProfileImageSizeValidatorPipe(),
    )
    image: Express.Multer.File,
    @UserData() userData: LoginUserData,
  ): Promise<IdResponse> {
    return this.fileUploadWriteService.uploadProfileImage(image, userData.id);
  }
}
