import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class ProfileImageNameTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_IMAGE_NAME_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ProfileImageNameTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_IMAGE_NAME_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
