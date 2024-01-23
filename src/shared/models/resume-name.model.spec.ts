import { RESUME_NAME_MAX_LENGTH } from '../constants/validator.constants';
import { ResumeNameIsTooLongError } from '../exception/error/resume-name.error';
import { ResumeName } from './resume-name.model';

describe('ResumeName', () => {
  const MAX_LENGTH_RESUME_NAME = 'a'.repeat(RESUME_NAME_MAX_LENGTH);
  const TOO_LONG_RESUME_NAME = 'a'.repeat(RESUME_NAME_MAX_LENGTH + 1);

  it('이력서 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new ResumeName(TOO_LONG_RESUME_NAME);
    // then
    expect(actual).toThrow(ResumeNameIsTooLongError);
  });

  it('이력서 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const resumeName = new ResumeName(MAX_LENGTH_RESUME_NAME);
    // then
    expect(resumeName.value).toBe(MAX_LENGTH_RESUME_NAME);
  });
});
