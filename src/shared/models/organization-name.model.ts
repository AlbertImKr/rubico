import {
  ORGANIZATION_NAME_MAX_LENGTH,
  ORGANIZATION_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  OrganizationNameIsTooLongError,
  OrganizationNameIsTooShortError,
} from '../exception/error/organization-name.error';

export class OrganizationName {
  readonly value: string;

  constructor(value: string) {
    OrganizationName.validate(value);
    this.value = value;
  }

  private static validate(value: string): void {
    if (value.length < ORGANIZATION_NAME_MIN_LENGTH) {
      throw new OrganizationNameIsTooShortError();
    }
    if (value.length > ORGANIZATION_NAME_MAX_LENGTH) {
      throw new OrganizationNameIsTooLongError();
    }
  }
}
