import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class PasswordIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.USER_PASSWORD_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class PasswordIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.USER_PASSWORD_IS_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}

export class PasswordIsNotMatchedError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.USER_PASSWORD_IS_NOT_MATCHES,
      HttpStatus.BAD_REQUEST,
    );
  }
}
