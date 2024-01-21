import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { BriefIntroduction } from './brief-Introduction.model';

describe('BriefIntroduction', () => {
  it('한줄 소개는 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new BriefIntroduction('a'.repeat(601));
    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.BRIEF_INTRODUCTION_TOO_LONG);
  });

  it('한줄 소개는 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const briefIntroduction = new BriefIntroduction('a'.repeat(600));
    // then
    expect(briefIntroduction.value).toBe('a'.repeat(600));
  });
});
