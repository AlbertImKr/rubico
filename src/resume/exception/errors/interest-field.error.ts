import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../../../shared/exception/exception-messages.constants';

export class InterestFieldNameIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.INTEREST_FIELD_NAME_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class InterestFieldNameIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.INTEREST_FIELD_NAME_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
