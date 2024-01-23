import {
  ORGANIZATION_NAME_MAX_LENGTH,
  ORGANIZATION_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  OrganizationNameIsTooLongError,
  OrganizationNameIsTooShortError,
} from '../exception/error/organization-name.error';
import { OrganizationName } from './organization-name.model';

describe('OrganizationName', () => {
  const MIN_ORGANIZATION_NAME = 'a'.repeat(ORGANIZATION_NAME_MAX_LENGTH);
  const MAX_ORGANIZATION_NAME = 'a'.repeat(ORGANIZATION_NAME_MIN_LENGTH);
  const TOO_LONG_ORGANIZATION_NAME = 'a'.repeat(
    ORGANIZATION_NAME_MAX_LENGTH + 1,
  );
  const TOO_SHORT_ORGANIZATION_NAME = 'a'.repeat(
    ORGANIZATION_NAME_MIN_LENGTH - 1,
  );

  it('조직 이름은 최소 제한 길이보다 짧을 수 없다.', () => {
    // given
    const organizationName = TOO_SHORT_ORGANIZATION_NAME;

    // when
    const actual = () => new OrganizationName(organizationName);

    // then
    expect(actual).toThrow(OrganizationNameIsTooShortError);
  });

  it('조직 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const organizationName = MIN_ORGANIZATION_NAME;

    // when
    const actual = new OrganizationName(organizationName);

    // then
    expect(actual.value).toBe(organizationName);
  });

  it('조직 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // given
    const organizationName = TOO_LONG_ORGANIZATION_NAME;

    // when
    const actual = () => new OrganizationName(organizationName);

    // then
    expect(actual).toThrow(OrganizationNameIsTooLongError);
  });

  it('조직 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const organizationName = MAX_ORGANIZATION_NAME;

    // when
    const actual = new OrganizationName(organizationName);

    // then
    expect(actual.value).toBe(organizationName);
  });
});
