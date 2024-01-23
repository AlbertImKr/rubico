import {
  PROJECT_NAME_MAX_LENGTH,
  PROJECT_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  ProjectNameIsTooLongError,
  ProjectNameIsTooShortError,
} from '../exception/error/project-name.error';
import { ProjectName } from './project-name.model';

describe('ProjectName', () => {
  const MIN_LENGTH_PROJECT_NAME = 'a'.repeat(PROJECT_NAME_MIN_LENGTH);
  const MAX_LENGTH_PROJECT_NAME = 'a'.repeat(PROJECT_NAME_MAX_LENGTH);
  const TOO_SHORT_PROJECT_NAME = 'a'.repeat(PROJECT_NAME_MIN_LENGTH - 1);
  const TOO_LONG_PROJECT_NAME = 'a'.repeat(PROJECT_NAME_MAX_LENGTH + 1);

  it('프로젝트 이름은 최소 제한 길이보다 짧을 수 없다.', () => {
    // given
    const projectName = TOO_SHORT_PROJECT_NAME;

    // when
    const actual = () => new ProjectName(projectName);

    // then
    expect(actual).toThrow(ProjectNameIsTooShortError);
  });

  it('프로젝트 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const projectName = MIN_LENGTH_PROJECT_NAME;

    // when
    const actual = new ProjectName(projectName);

    // then
    expect(actual.value).toBe(projectName);
  });

  it('프로젝트 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // given
    const projectName = TOO_LONG_PROJECT_NAME;

    // when
    const actual = () => new ProjectName(projectName);

    // then
    expect(actual).toThrow(ProjectNameIsTooLongError);
  });

  it('프로젝트 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const projectName = MAX_LENGTH_PROJECT_NAME;

    // when
    const actual = new ProjectName(projectName);

    // then
    expect(actual.value).toBe(projectName);
  });
});
