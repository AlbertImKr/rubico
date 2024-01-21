import { RESUME_OCCUPATION_MAX_LENGTH } from '../constants/validator.constants';
import { ResumeOccupationIsTooLongError } from '../exception/error/resume-occupation.error';

export class ResumeOccupation {
  readonly value: string;

  constructor(value: string) {
    ResumeOccupation.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > RESUME_OCCUPATION_MAX_LENGTH) {
      throw new ResumeOccupationIsTooLongError();
    }
  }
}
