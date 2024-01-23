import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class ResumeNameIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.RESUME_NAME_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}
