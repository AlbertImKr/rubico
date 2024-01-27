import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class ProfileImageIsTooLarge extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_TOO_LARGE,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ProfileImageIsNotImage extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_NOT_IMAGE,
      HttpStatus.BAD_REQUEST,
    );
  }
}
