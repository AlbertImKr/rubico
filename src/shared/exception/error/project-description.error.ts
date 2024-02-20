import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class ProjectDescriptionIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROJECT_DESCRIPTION_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ProjectDescriptionIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROJECT_DESCRIPTION_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
