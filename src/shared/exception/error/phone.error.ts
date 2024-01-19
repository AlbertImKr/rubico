import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class PhoneNumberIsNotMatchedError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.PHONE_NUMBER_NOT_MATCHES, HttpStatus.BAD_REQUEST);
  }
}
