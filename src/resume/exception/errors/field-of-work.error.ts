import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../../../shared/exception/exception-messages.constants';

export class FieldOfWorkNameIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.FIELD_OF_WORK_NAME_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class FieldOfWorkNameIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.FIELD_OF_WORK_NAME_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
