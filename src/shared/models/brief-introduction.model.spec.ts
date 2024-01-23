import { BRIEF_INTRODUCTION_MAX_LENGTH } from '../constants/validator.constants';
import { BriefIntroductionIsTooLongError } from '../exception/error/brief-introduction.error';
import { BriefIntroduction } from './brief-Introduction.model';

describe('BriefIntroduction', () => {
  const MAX_LENGTH_BRIEF_INTRODUCTION = 'a'.repeat(
    BRIEF_INTRODUCTION_MAX_LENGTH,
  );
  const TOO_LONG_BRIEF_INTRODUCTION = 'a'.repeat(
    BRIEF_INTRODUCTION_MAX_LENGTH + 1,
  );

  it('한줄 소개는 최대 제한 길이를 초과할 수 없다.', () => {
    // when
    const actual = () => new BriefIntroduction(TOO_LONG_BRIEF_INTRODUCTION);
    // then
    expect(actual).toThrow(BriefIntroductionIsTooLongError);
  });

  it('한줄 소개는 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const briefIntroduction = new BriefIntroduction(
      MAX_LENGTH_BRIEF_INTRODUCTION,
    );
    // then
    expect(briefIntroduction.value).toBe(MAX_LENGTH_BRIEF_INTRODUCTION);
  });
});
