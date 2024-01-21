import { RESUME_OCCUPATION_MAX_LENGTH } from '../constants/validator.constants';
import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { ResumeOccupation } from './resume-occupation.model';

describe('ResumeOccupation', () => {
  it('직업 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () =>
      new ResumeOccupation('a'.repeat(RESUME_OCCUPATION_MAX_LENGTH + 1));
    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.RESUME_OCCUPATION_TOO_LONG);
  });

  it('직업 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const resumeOccupation = new ResumeOccupation(
      'a'.repeat(RESUME_OCCUPATION_MAX_LENGTH),
    );
    // then
    expect(resumeOccupation.value).toBe(
      'a'.repeat(RESUME_OCCUPATION_MAX_LENGTH),
    );
  });
});
