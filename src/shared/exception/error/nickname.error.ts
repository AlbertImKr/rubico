import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class NicknameIsTooLongError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.NICKNAME_TOO_LONG);
  }
}

export class NicknameIsTooShortError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.NICKNAME_TOO_SHORT);
  }
}
