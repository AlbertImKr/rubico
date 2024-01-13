import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class UserAccountNotFoundError extends Error {
  constructor() {
    super(EXCEPTION_MESSAGES.USER_NOT_FOUND);
  }
}
