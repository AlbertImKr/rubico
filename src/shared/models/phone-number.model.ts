import { USER_PHONE_NUMBER_PATTERN } from '../constants/validator.constants';
import { PhoneNumberIsNotMatchedError } from '../exception/error/phone.error';

export class PhoneNumber {
  readonly value: string;

  constructor(value: string) {
    PhoneNumber.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    const phoneNumberRegex = new RegExp(USER_PHONE_NUMBER_PATTERN);
    if (!phoneNumberRegex.test(value)) {
      throw new PhoneNumberIsNotMatchedError();
    }
  }
}
