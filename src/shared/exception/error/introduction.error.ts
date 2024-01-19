import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class IntroductionIsTooLongError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.INTRODUCTION_TOO_LONG);
  }
}

export class IntroductionIsTooShortError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.INTRODUCTION_TOO_SHORT);
  }
}
