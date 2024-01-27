import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Public, UserData } from '../../shared/decorators/auth.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import {
  ProfileImageSizeValidatorPipe,
  ProfileImageTypeValidatorPipe,
} from '../../shared/pipes/profile-image-validation.pipe';
import { ProfileImageWriteService } from '../service/profile-image.write.service';

@Controller('profile-image')
export class ProfileImageWriteController {
  constructor(private readonly profileImageService: ProfileImageWriteService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async upload(
    @UploadedFile(
      new ProfileImageTypeValidatorPipe(),
      new ProfileImageSizeValidatorPipe(),
    )
    image: Express.Multer.File,
    @UserData() userData: LoginUserData,
  ) {
    console.log('file :>> ', image);
  }
}
