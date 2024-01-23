import {
  PROJECT_DESCRIPTION_MAX_LENGTH,
  PROJECT_DESCRIPTION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  ProjectDescriptionIsTooLongError,
  ProjectDescriptionIsTooShortError,
} from '../exception/error/project-description.error';

export class ProjectDescription {
  readonly value: string;

  constructor(value: string) {
    ProjectDescription.validate(value);
    this.value = value;
  }

  private static validate(value: string): void {
    if (value.length > PROJECT_DESCRIPTION_MAX_LENGTH) {
      throw new ProjectDescriptionIsTooLongError();
    }
    if (value.length < PROJECT_DESCRIPTION_MIN_LENGTH) {
      throw new ProjectDescriptionIsTooShortError();
    }
  }
}
