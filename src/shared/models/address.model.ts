import {
  USER_ADDRESS_MAX_LENGTH,
  USER_ADDRESS_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  AddressIsTooLongError,
  AddressIsTooShortError,
} from '../exception/error/address.error';

export class Address {
  readonly value: string;

  constructor(value: string) {
    Address.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > USER_ADDRESS_MAX_LENGTH) {
      throw new AddressIsTooLongError();
    }
    if (value.length < USER_ADDRESS_MIN_LENGTH) {
      throw new AddressIsTooShortError();
    }
  }
}
