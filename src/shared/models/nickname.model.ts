import {
  USER_NICKNAME_MAX_LENGTH,
  USER_NICKNAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  NicknameIsTooLongError,
  NicknameIsTooShortError,
} from '../exception/error/nickname.error';

export class Nickname {
  readonly value: string;

  constructor(value: string) {
    Nickname.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length < USER_NICKNAME_MIN_LENGTH) {
      throw new NicknameIsTooShortError();
    }
    if (value.length > USER_NICKNAME_MAX_LENGTH) {
      throw new NicknameIsTooLongError();
    }
  }
}
