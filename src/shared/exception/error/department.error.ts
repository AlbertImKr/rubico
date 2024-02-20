import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class DepartmentIsTooShortError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.DEPARTMENT_IS_TOO_SHORT, HttpStatus.BAD_REQUEST);
  }
}

export class DepartmentIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.DEPARTMENT_IS_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}
