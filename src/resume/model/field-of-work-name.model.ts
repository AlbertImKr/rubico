import {
  FIELD_OF_WORK_NAME_MAX_LENGTH,
  FIELD_OF_WORK_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  FieldOfWorkNameIsTooLongError,
  FieldOfWorkNameIsTooShortError,
} from '../exception/errors/field-of-work.error';

export class FieldOfWorkName {
  value: string;

  constructor(value: string) {
    FieldOfWorkName.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > FIELD_OF_WORK_NAME_MAX_LENGTH) {
      throw new FieldOfWorkNameIsTooLongError();
    }
    if (value.length < FIELD_OF_WORK_NAME_MIN_LENGTH) {
      throw new FieldOfWorkNameIsTooShortError();
    }
  }
}
