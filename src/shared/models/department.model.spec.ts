import {
  DEPARTMENT_MAX_LENGTH,
  DEPARTMENT_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  DepartmentIsTooLongError,
  DepartmentIsTooShortError,
} from '../exception/error/department.error';
import { Department } from './department.model';

describe('Department', () => {
  const MIN_LENGTH_DEPARTMENT = 'a'.repeat(DEPARTMENT_MIN_LENGTH);
  const MAX_LENGTH_DEPARTMENT = 'a'.repeat(DEPARTMENT_MAX_LENGTH);
  const TOO_SHORT_DEPARTMENT = 'a'.repeat(DEPARTMENT_MIN_LENGTH - 1);
  const TOO_LONG_DEPARTMENT = 'a'.repeat(DEPARTMENT_MAX_LENGTH + 1);

  it('부서는 최소 제한 길이보다 짧을 수 없다.', () => {
    // when
    const actual = () => new Department(TOO_SHORT_DEPARTMENT);
    // then
    expect(actual).toThrow(DepartmentIsTooShortError);
  });

  it('부서는 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const department = new Department(MIN_LENGTH_DEPARTMENT);
    // then
    expect(department.value).toBe(MIN_LENGTH_DEPARTMENT);
  });

  it('부서는 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new Department(TOO_LONG_DEPARTMENT);
    // then
    expect(actual).toThrow(DepartmentIsTooLongError);
  });

  it('부서는 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const department = new Department(MAX_LENGTH_DEPARTMENT);
    // then
    expect(department.value).toBe(MAX_LENGTH_DEPARTMENT);
  });
});
