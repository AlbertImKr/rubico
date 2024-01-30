import { Injectable, PipeTransform } from '@nestjs/common';
import {
  PROFILE_IMAGE_MAX_SIZE,
  PROFILE_IMAGE_TYPE,
} from '../constants/validator.constants';
import {
  ProfileImageIsNotImageError,
  ProfileImageIsTooLargeError,
} from '../exception/error/profile-image.error';

@Injectable()
export class ProfileImageSizeValidatorPipe implements PipeTransform {
  transform(value: any) {
    const file = value as Express.Multer.File;
    if (file?.size > PROFILE_IMAGE_MAX_SIZE) {
      throw new ProfileImageIsTooLargeError();
    }
    return value;
  }
}

@Injectable()
export class ProfileImageTypeValidatorPipe implements PipeTransform {
  transform(value: any) {
    const file = value as Express.Multer.File;
    if (!file?.mimetype.match(PROFILE_IMAGE_TYPE)) {
      throw new ProfileImageIsNotImageError();
    }
    return value;
  }
}
