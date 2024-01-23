import { BRIEF_INTRODUCTION_MAX_LENGTH } from '../constants/validator.constants';
import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { BriefIntroduction } from './brief-Introduction.model';

describe('BriefIntroduction', () => {
  const RIGHT_BRIEF_INTRODUCTION = 'a'.repeat(BRIEF_INTRODUCTION_MAX_LENGTH);
  const TOO_LONG_BRIEF_INTRODUCTION = 'a'.repeat(
    BRIEF_INTRODUCTION_MAX_LENGTH + 1,
  );

  it('한줄 소개는 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new BriefIntroduction(TOO_LONG_BRIEF_INTRODUCTION);
    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.BRIEF_INTRODUCTION_TOO_LONG);
  });

  it('한줄 소개는 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const briefIntroduction = new BriefIntroduction(RIGHT_BRIEF_INTRODUCTION);
    // then
    expect(briefIntroduction.value).toBe(RIGHT_BRIEF_INTRODUCTION);
  });
});
