import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class AddressIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.ADDRESS_IS_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}

export class AddressIsTooShortError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.ADDRESS_IS_TOO_SHORT, HttpStatus.BAD_REQUEST);
  }
}
