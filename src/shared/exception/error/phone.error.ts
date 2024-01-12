import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class PhoneNumberIsNotMatchedError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.PHONE_NUMBER_NOT_MATCHES);
  }
}
