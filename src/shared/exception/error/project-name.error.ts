import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class ProjectNameIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.PROJECT_NAME_IS_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}

export class ProjectNameIsTooShortError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.PROJECT_NAME_IS_TOO_SHORT, HttpStatus.BAD_REQUEST);
  }
}
