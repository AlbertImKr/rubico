import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class WorkPositionIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.WORK_POSITION_IS_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}

export class WorkPositionIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.WORK_POSITION_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
