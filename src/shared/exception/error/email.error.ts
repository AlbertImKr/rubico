import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class EmailIsNotMatchedError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.EMAIL_IS_NOT_MATCHES, HttpStatus.BAD_REQUEST);
  }
}
