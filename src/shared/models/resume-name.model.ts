import { RESUME_NAME_MAX_LENGTH } from '../constants/validator.constants';
import { ResumeNameIsTooLongError } from '../exception/error/resume-name.error';

export class ResumeName {
  readonly value: string;

  constructor(value: string) {
    ResumeName.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > RESUME_NAME_MAX_LENGTH) {
      throw new ResumeNameIsTooLongError();
    }
  }
}
