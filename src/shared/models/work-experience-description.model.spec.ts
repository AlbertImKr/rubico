import {
  WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  WorkExperienceDescriptionIsTooLongError,
  WorkExperienceDescriptionIsTooShortError,
} from '../exception/error/work-experience-description.error';
import { WorkExperienceDescription } from './work-experience-description.model';

describe('WorkExperienceDescription', () => {
  const MIN_LENGTH_WORK_EXPERIENCE_DESCRIPTION = 'a'.repeat(
    WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH,
  );
  const TOO_SHORT_WORK_EXPERIENCE_DESCRIPTION = 'a'.repeat(
    WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH - 1,
  );
  const MAX_LENGTH_WORK_EXPERIENCE_DESCRIPTION = 'a'.repeat(
    WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  );
  const TOO_LONG_WORK_EXPERIENCE_DESCRIPTION = 'a'.repeat(
    WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH + 1,
  );

  it('근무 내용은 최소 제한 길이보다 짧을 수 없다.', () => {
    // when
    const actual = () =>
      new WorkExperienceDescription(TOO_SHORT_WORK_EXPERIENCE_DESCRIPTION);
    // then
    expect(actual).toThrow(WorkExperienceDescriptionIsTooShortError);
  });

  it('근무 내용은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const workExperienceDescription = new WorkExperienceDescription(
      MIN_LENGTH_WORK_EXPERIENCE_DESCRIPTION,
    );
    // then
    expect(workExperienceDescription.value).toBe(
      MIN_LENGTH_WORK_EXPERIENCE_DESCRIPTION,
    );
  });

  it('근무 내용은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () =>
      new WorkExperienceDescription(TOO_LONG_WORK_EXPERIENCE_DESCRIPTION);
    // then
    expect(actual).toThrow(WorkExperienceDescriptionIsTooLongError);
  });

  it('근무 내용은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const workExperienceDescription = new WorkExperienceDescription(
      MAX_LENGTH_WORK_EXPERIENCE_DESCRIPTION,
    );
    // then
    expect(workExperienceDescription.value).toBe(
      MAX_LENGTH_WORK_EXPERIENCE_DESCRIPTION,
    );
  });
});
