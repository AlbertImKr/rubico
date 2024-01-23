import {
  COMPANY_NAME_MAX_LENGTH,
  COMPANY_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  CompanyNameIsTooLongError,
  CompanyNameIsTooShortError,
} from '../exception/error/company-name.error';

export class CompanyName {
  readonly value: string;

  constructor(value: string) {
    CompanyName.validate(value);
    this.value = value;
  }

  private static validate(value: string): void {
    if (value.length > COMPANY_NAME_MAX_LENGTH) {
      throw new CompanyNameIsTooLongError();
    }
    if (value.length < COMPANY_NAME_MIN_LENGTH) {
      throw new CompanyNameIsTooShortError();
    }
  }
}
