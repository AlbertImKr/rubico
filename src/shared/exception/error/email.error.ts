import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class EmailIsNotMatchedError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.EMAIL_NOT_MATCHES);
  }
}
