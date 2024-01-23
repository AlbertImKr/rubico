import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class OrganizationNameIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.ORGANIZATION_NAME_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class OrganizationNameIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.ORGANIZATION_NAME_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
