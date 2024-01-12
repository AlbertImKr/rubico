import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class PasswordIsTooShortError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.USER_PASSWORD_TOO_SHORT);
  }
}

export class PasswordIsTooLongError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.USER_PASSWORD_TOO_LONG);
  }
}

export class PasswordIsNotMatchedError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.USER_PASSWORD_NOT_MATCHES);
  }
}
