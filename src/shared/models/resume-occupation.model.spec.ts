import { RESUME_OCCUPATION_MAX_LENGTH } from '../constants/validator.constants';
import { ResumeOccupationIsTooLongError } from '../exception/error/resume-occupation.error';
import { ResumeOccupation } from './resume-occupation.model';

describe('ResumeOccupation', () => {
  const MAX_LENGTH_RESUME_OCCUPATION = 'a'.repeat(RESUME_OCCUPATION_MAX_LENGTH);
  const TOO_LONG_RESUME_OCCUPATION = 'a'.repeat(
    RESUME_OCCUPATION_MAX_LENGTH + 1,
  );

  it('직업 이름은 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new ResumeOccupation(TOO_LONG_RESUME_OCCUPATION);
    // then
    expect(actual).toThrow(ResumeOccupationIsTooLongError);
  });

  it('직업 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const resumeOccupation = new ResumeOccupation(MAX_LENGTH_RESUME_OCCUPATION);
    // then
    expect(resumeOccupation.value).toBe(MAX_LENGTH_RESUME_OCCUPATION);
  });
});
