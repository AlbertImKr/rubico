import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class CompanyNameIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.COMPANY_NAME_IS_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}

export class CompanyNameIsTooShortError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.COMPANY_NAME_IS_TOO_SHORT, HttpStatus.BAD_REQUEST);
  }
}
