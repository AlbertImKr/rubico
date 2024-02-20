import {
  INTEREST_FIELD_NAME_MAX_LENGTH,
  INTEREST_FIELD_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  InterestFieldNameIsTooLongError,
  InterestFieldNameIsTooShortError,
} from '../exception/errors/interest-field.error';

export class InterestFieldName {
  readonly value: string;

  constructor(value: string) {
    InterestFieldName.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > INTEREST_FIELD_NAME_MAX_LENGTH) {
      throw new InterestFieldNameIsTooLongError();
    }
    if (value.length < INTEREST_FIELD_NAME_MIN_LENGTH) {
      throw new InterestFieldNameIsTooShortError();
    }
  }
}
