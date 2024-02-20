import {
  WORK_POSITION_MAX_LENGTH,
  WORK_POSITION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  WorkPositionIsTooLongError,
  WorkPositionIsTooShortError,
} from '../exception/error/work-position.error';

export class WorkPosition {
  readonly value: string;

  constructor(value: string) {
    WorkPosition.validate(value);
    this.value = value;
  }

  private static validate(value: string): void {
    if (value.length > WORK_POSITION_MAX_LENGTH) {
      throw new WorkPositionIsTooLongError();
    }
    if (value.length < WORK_POSITION_MIN_LENGTH) {
      throw new WorkPositionIsTooShortError();
    }
  }
}
