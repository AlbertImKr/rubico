import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class AddressIsTooLongError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.ADDRESS_TOO_LONG);
  }
}

export class AddressIsTooShortError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.ADDRESS_TOO_SHORT);
  }
}
