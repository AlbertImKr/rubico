import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class ResumeOccupationIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.RESUME_OCCUPATION_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}
