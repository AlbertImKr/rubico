import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class ProfileImageIsTooLargeError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_TOO_LARGE,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ProfileImageIsNotImageError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_NOT_IMAGE,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ProfileImageIsNotFoundError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_NOT_FOUND, HttpStatus.NOT_FOUND);
  }
}

export class ProfileImageUploadFailedError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.FILE_UPLOAD_FAILED,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
