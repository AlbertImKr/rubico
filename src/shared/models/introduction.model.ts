import {
  INTRODUCTION_MAX_LENGTH,
  INTRODUCTION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  IntroductionIsTooLongError,
  IntroductionIsTooShortError,
} from '../exception/error/introduction.error';

export class Introduction {
  readonly value: string;

  constructor(value: string) {
    Introduction.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > INTRODUCTION_MAX_LENGTH) {
      throw new IntroductionIsTooLongError();
    }
    if (value.length < INTRODUCTION_MIN_LENGTH) {
      throw new IntroductionIsTooShortError();
    }
  }
}
