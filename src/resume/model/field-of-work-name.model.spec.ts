import {
  FIELD_OF_WORK_NAME_MAX_LENGTH,
  FIELD_OF_WORK_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  FieldOfWorkNameIsTooLongError,
  FieldOfWorkNameIsTooShortError,
} from '../exception/errors/field-of-work.error';
import { FieldOfWorkName } from './field-of-work-name.model';

describe('FieldOfWorkName', () => {
  const MAX_LENGTH_FIELD_OF_WORK_NAME = 'a'.repeat(
    FIELD_OF_WORK_NAME_MAX_LENGTH,
  );
  const TOO_LONG_FIELD_OF_WORK_NAME = 'a'.repeat(
    FIELD_OF_WORK_NAME_MAX_LENGTH + 1,
  );
  const MIN_LENGTH_FIELD_OF_WORK_NAME = 'a'.repeat(
    FIELD_OF_WORK_NAME_MIN_LENGTH,
  );
  const TOO_SHORT_FIELD_OF_WORK_NAME = 'a'.repeat(
    FIELD_OF_WORK_NAME_MIN_LENGTH - 1,
  );

  it('직무 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const fieldOfWork = new FieldOfWorkName(MIN_LENGTH_FIELD_OF_WORK_NAME);

    // then
    expect(fieldOfWork.value).toBe(MIN_LENGTH_FIELD_OF_WORK_NAME);
  });

  it('직무 이름은 최소 길이보다 작은 이름을 전달하면 에러가 발생한다', () => {
    // when
    const fieldOfWork = () => new FieldOfWorkName(TOO_SHORT_FIELD_OF_WORK_NAME);

    // then
    expect(fieldOfWork).toThrow(FieldOfWorkNameIsTooShortError);
  });

  it('직무 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const fieldOfWork = new FieldOfWorkName(MAX_LENGTH_FIELD_OF_WORK_NAME);

    // then
    expect(fieldOfWork.value).toBe(MAX_LENGTH_FIELD_OF_WORK_NAME);
  });

  it('직무 이름은 최대 길이보다 큰 이름을 전달하면 에러가 발생한다', () => {
    // when
    const fieldOfWork = () => new FieldOfWorkName(TOO_LONG_FIELD_OF_WORK_NAME);

    // then
    expect(fieldOfWork).toThrow(FieldOfWorkNameIsTooLongError);
  });
});
