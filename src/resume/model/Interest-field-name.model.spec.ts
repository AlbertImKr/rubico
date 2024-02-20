import {
  INTEREST_FIELD_NAME_MAX_LENGTH,
  INTEREST_FIELD_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  InterestFieldNameIsTooLongError,
  InterestFieldNameIsTooShortError,
} from '../exception/errors/interest-field.error';
import { InterestFieldName } from './Interest-field-name.model';

describe('InterestFieldName', () => {
  const MAX_LENGTH_INTEREST_FIELD_NAME = 'a'.repeat(
    INTEREST_FIELD_NAME_MAX_LENGTH,
  );
  const TOO_LONG_INTEREST_FIELD_NAME = 'a'.repeat(
    INTEREST_FIELD_NAME_MAX_LENGTH + 1,
  );
  const MIN_LENGTH_INTEREST_FIELD_NAME = 'a'.repeat(
    INTEREST_FIELD_NAME_MIN_LENGTH,
  );
  const TOO_SHORT_INTEREST_FIELD_NAME = 'a'.repeat(
    INTEREST_FIELD_NAME_MIN_LENGTH - 1,
  );

  it('관심분야 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const interestField = new InterestFieldName(MIN_LENGTH_INTEREST_FIELD_NAME);

    // then
    expect(interestField.value).toBe(MIN_LENGTH_INTEREST_FIELD_NAME);
  });

  it('관심분야 이름은 최소 길이보다 작은 이름을 전달하면 에러가 발생한다', () => {
    // when
    const interestField = () =>
      new InterestFieldName(TOO_SHORT_INTEREST_FIELD_NAME);

    // then
    expect(interestField).toThrow(InterestFieldNameIsTooShortError);
  });

  it('관심분야 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const interestField = new InterestFieldName(MAX_LENGTH_INTEREST_FIELD_NAME);

    // then
    expect(interestField.value).toBe(MAX_LENGTH_INTEREST_FIELD_NAME);
  });

  it('관심분야 이름은 최대 길이보다 큰 이름을 전달하면 에러가 발생한다', () => {
    // when
    const interestField = () =>
      new InterestFieldName(TOO_LONG_INTEREST_FIELD_NAME);

    // then
    expect(interestField).toThrow(InterestFieldNameIsTooLongError);
  });
});
