import {
  PROJECT_DESCRIPTION_MAX_LENGTH,
  PROJECT_DESCRIPTION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  ProjectDescriptionIsTooLongError,
  ProjectDescriptionIsTooShortError,
} from '../exception/error/project-description.error';
import { ProjectDescription } from './project-description.model';

describe('ProjectDescription', () => {
  const MIN_PROJECT_DESCRIPTION = 'a'.repeat(PROJECT_DESCRIPTION_MIN_LENGTH);
  const MAX_PROJECT_DESCRIPTION = 'a'.repeat(PROJECT_DESCRIPTION_MAX_LENGTH);
  const TOO_SHORT_PROJECT_DESCRIPTION = 'a'.repeat(
    PROJECT_DESCRIPTION_MIN_LENGTH - 1,
  );
  const TOO_LONG_PROJECT_DESCRIPTION = 'a'.repeat(
    PROJECT_DESCRIPTION_MAX_LENGTH + 1,
  );

  it('프로젝트 설명은 최소 제한 길이보다 짧을 수 없다.', () => {
    // when
    const actual = () => new ProjectDescription(TOO_SHORT_PROJECT_DESCRIPTION);
    // then
    expect(actual).toThrow(ProjectDescriptionIsTooShortError);
  });

  it('프로젝트 설명은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const projectDescription = new ProjectDescription(MIN_PROJECT_DESCRIPTION);
    // then
    expect(projectDescription.value).toBe(MIN_PROJECT_DESCRIPTION);
  });

  it('프로젝트 설명은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new ProjectDescription(TOO_LONG_PROJECT_DESCRIPTION);
    // then
    expect(actual).toThrow(ProjectDescriptionIsTooLongError);
  });

  it('프로젝트 설명은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const projectDescription = new ProjectDescription(MAX_PROJECT_DESCRIPTION);
    // then
    expect(projectDescription.value).toBe(MAX_PROJECT_DESCRIPTION);
  });
});
