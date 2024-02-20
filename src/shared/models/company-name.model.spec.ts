import {
  COMPANY_NAME_MAX_LENGTH,
  COMPANY_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  CompanyNameIsTooLongError,
  CompanyNameIsTooShortError,
} from '../exception/error/company-name.error';
import { CompanyName } from './company-name.model';

describe('CompanyName', () => {
  const MIN_COMPANY_NAME = 'a'.repeat(COMPANY_NAME_MIN_LENGTH);
  const TOO_SHORT_COMPANY_NAME = 'a'.repeat(COMPANY_NAME_MIN_LENGTH - 1);
  const MAX_COMPANY_NAME = 'a'.repeat(COMPANY_NAME_MAX_LENGTH);
  const TOO_LONG_COMPANY_NAME = 'a'.repeat(COMPANY_NAME_MAX_LENGTH + 1);

  it('회사 이름은 최소 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new CompanyName(TOO_SHORT_COMPANY_NAME);
    // then
    expect(actual).toThrow(CompanyNameIsTooShortError);
  });

  it('회사 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new CompanyName(TOO_LONG_COMPANY_NAME);
    // then
    expect(actual).toThrow(CompanyNameIsTooLongError);
  });

  it('회사 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const companyName = new CompanyName(MIN_COMPANY_NAME);
    // then
    expect(companyName.value).toBe(MIN_COMPANY_NAME);
  });

  it('회사 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const companyName = new CompanyName(MAX_COMPANY_NAME);
    // then
    expect(companyName.value).toBe(MAX_COMPANY_NAME);
  });
});
