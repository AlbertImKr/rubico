import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  PasswordIsNotMatchedError,
  PasswordIsTooLongError,
  PasswordIsTooShortError,
} from '../exception/error/password.error';

export class Password {
  readonly value: string;

  constructor(password: string) {
    Password.validate(password);
    this.value = password;
  }

  static validate(password: string): void {
    const passwordLength = password.length;
    if (passwordLength < USER_PASSWORD_MIN_LENGTH) {
      throw new PasswordIsTooShortError();
    }
    if (passwordLength > USER_PASSWORD_MAX_LENGTH) {
      throw new PasswordIsTooLongError();
    }
    const passwordRegex = new RegExp(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'),
    );
    if (!passwordRegex.test(password)) {
      throw new PasswordIsNotMatchedError();
    }
  }

  isSame(password: Password): boolean {
    return this.value === password.value;
  }
}
