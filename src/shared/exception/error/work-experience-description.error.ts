import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class WorkExperienceDescriptionIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.WORK_EXPERIENCE_DESCRIPTION_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class WorkExperienceDescriptionIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.WORK_EXPERIENCE_DESCRIPTION_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
