import {
  WORK_POSITION_MAX_LENGTH,
  WORK_POSITION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  WorkPositionIsTooLongError,
  WorkPositionIsTooShortError,
} from '../exception/error/work-position.error';
import { WorkPosition } from './work-position.model';

describe('WorkPosition', () => {
  const MAX_LENGTH_WORK_POSITION = 'a'.repeat(WORK_POSITION_MAX_LENGTH);
  const TOO_LONG_WORK_POSITION = 'a'.repeat(WORK_POSITION_MAX_LENGTH + 1);
  const TOO_SHORT_WORK_POSITION = 'a'.repeat(WORK_POSITION_MIN_LENGTH - 1);
  const MIN_LENGTH_WORK_POSITION = 'a'.repeat(WORK_POSITION_MIN_LENGTH);

  it('직군 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new WorkPosition(TOO_LONG_WORK_POSITION);
    // then
    expect(actual).toThrow(WorkPositionIsTooLongError);
  });

  it('직군 이름은 최소 제한 길이보다 작을 수 없다.', () => {
    // when
    const actual = () => new WorkPosition(TOO_SHORT_WORK_POSITION);
    // then
    expect(actual).toThrow(WorkPositionIsTooShortError);
  });

  it('직군 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const workPosition = new WorkPosition(MAX_LENGTH_WORK_POSITION);
    // then
    expect(workPosition.value).toBe(MAX_LENGTH_WORK_POSITION);
  });

  it('직군 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const workPosition = new WorkPosition(MIN_LENGTH_WORK_POSITION);
    // then
    expect(workPosition.value).toBe(MIN_LENGTH_WORK_POSITION);
  });
});
