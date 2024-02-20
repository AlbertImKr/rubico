import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class NicknameIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.NICKNAME_IS_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}

export class NicknameIsTooShortError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.NICKNAME_IS_TOO_SHORT, HttpStatus.BAD_REQUEST);
  }
}
