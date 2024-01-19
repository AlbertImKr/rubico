import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class IntroductionIsTooLongError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.INTRODUCTION_TOO_LONG, HttpStatus.BAD_REQUEST);
  }
}

export class IntroductionIsTooShortError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.INTRODUCTION_TOO_SHORT, HttpStatus.BAD_REQUEST);
  }
}
