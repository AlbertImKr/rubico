import { BRIEF_INTRODUCTION_MAX_LENGTH } from '../constants/validator.constants';
import { BriefIntroductionIsTooLongError } from '../exception/error/brief-introduction.error';

export class BriefIntroduction {
  readonly value: string;

  constructor(value: string) {
    BriefIntroduction.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > BRIEF_INTRODUCTION_MAX_LENGTH) {
      throw new BriefIntroductionIsTooLongError();
    }
  }
}
