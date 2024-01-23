import {
  WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  WorkExperienceDescriptionIsTooLongError,
  WorkExperienceDescriptionIsTooShortError,
} from '../exception/error/work-experience-description.error';

export class WorkExperienceDescription {
  readonly value: string;

  constructor(value: string) {
    WorkExperienceDescription.validate(value);
    this.value = value;
  }
  static validate(value: string): void {
    if (value.length > WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH) {
      throw new WorkExperienceDescriptionIsTooLongError();
    }
    if (value.length < WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH) {
      throw new WorkExperienceDescriptionIsTooShortError();
    }
  }
}
