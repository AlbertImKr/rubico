import {
  DEPARTMENT_MAX_LENGTH,
  DEPARTMENT_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  DepartmentIsTooLongError,
  DepartmentIsTooShortError,
} from '../exception/error/department.error';

export class Department {
  readonly value: string;

  constructor(value: string) {
    Department.validate(value);
    this.value = value;
  }

  private static validate(value: string): void {
    if (value.length > DEPARTMENT_MAX_LENGTH) {
      throw new DepartmentIsTooLongError();
    }
    if (value.length < DEPARTMENT_MIN_LENGTH) {
      throw new DepartmentIsTooShortError();
    }
  }
}
