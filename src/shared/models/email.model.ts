import { USER_EMAIL_REGEX } from '../constants/validator.constants';
import { EmailIsNotMatchedError } from '../exception/error/email.error';

export class Email {
  readonly value: string;

  constructor(value: string) {
    Email.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (!USER_EMAIL_REGEX.test(value)) {
      throw new EmailIsNotMatchedError();
    }
  }
}
