import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class BriefIntroductionIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.BRIEF_INTRODUCTION_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}
