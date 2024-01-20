import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class UserAccountNotFoundError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.USER_NOT_FOUND, HttpStatus.FORBIDDEN);
  }
}

export class EmailAlreadyExistsError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.EMAIL_ALREADY_EXISTS, HttpStatus.FORBIDDEN);
  }
}

export class PasswordNotMatchError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.PASSWORD_NOT_MATCH, HttpStatus.FORBIDDEN);
  }
}
