import {
  PROJECT_NAME_MAX_LENGTH,
  PROJECT_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  ProjectNameIsTooLongError,
  ProjectNameIsTooShortError,
} from '../exception/error/project-name.error';

export class ProjectName {
  readonly value: string;

  constructor(value: string) {
    ProjectName.validate(value);
    this.value = value;
  }

  static validate(value: string) {
    if (value.length > PROJECT_NAME_MAX_LENGTH) {
      throw new ProjectNameIsTooLongError();
    }
    if (value.length < PROJECT_NAME_MIN_LENGTH) {
      throw new ProjectNameIsTooShortError();
    }
  }
}
