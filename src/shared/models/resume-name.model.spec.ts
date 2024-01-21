import { RESUME_NAME_MAX_LENGTH } from '../constants/validator.constants';
import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { ResumeName } from './resume-name.model';

describe('ResumeName', () => {
  it('이력서 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new ResumeName('a'.repeat(RESUME_NAME_MAX_LENGTH + 1));
    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.RESUME_NAME_TOO_LONG);
  });

  it('이력서 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const resumeName = new ResumeName('a'.repeat(RESUME_NAME_MAX_LENGTH));
    // then
    expect(resumeName.value).toBe('a'.repeat(RESUME_NAME_MAX_LENGTH));
  });
});
