import {
  INTRODUCTION_MAX_LENGTH,
  INTRODUCTION_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  IntroductionIsTooLongError,
  IntroductionIsTooShortError,
} from '../exception/error/introduction.error';
import { Introduction } from './introduction.model';

describe('Introduction', () => {
  const MIN_LENGTH_INTRODUCTION = 'a'.repeat(INTRODUCTION_MIN_LENGTH);
  const MAX_LENGTH_INTRODUCTION = 'a'.repeat(INTRODUCTION_MAX_LENGTH);
  const TOO_SHORT_INTRODUCTION = 'a'.repeat(INTRODUCTION_MIN_LENGTH - 1);
  const TOO_LONG_INTRODUCTION = 'a'.repeat(INTRODUCTION_MAX_LENGTH + 1);

  it('소개는 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const introduction = new Introduction(MIN_LENGTH_INTRODUCTION);

    // then
    expect(introduction.value).toBe(MIN_LENGTH_INTRODUCTION);
  });

  it('소개는 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const introduction = new Introduction(MAX_LENGTH_INTRODUCTION);

    // then
    expect(introduction.value).toBe(MAX_LENGTH_INTRODUCTION);
  });

  it('소개는 최소 길이보다 작은 소개를 전달하면 에러가 발생한다', () => {
    // when
    const introduction = () => new Introduction(TOO_SHORT_INTRODUCTION);

    // then
    expect(introduction).toThrow(IntroductionIsTooShortError);
  });

  it('소개는 최대 길이보다 큰 소개를 전달하면 에러가 발생한다', () => {
    // when
    const introduction = () => new Introduction(TOO_LONG_INTRODUCTION);

    // then
    expect(introduction).toThrow(IntroductionIsTooLongError);
  });
});
