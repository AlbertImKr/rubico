import {
  USER_NICKNAME_MAX_LENGTH,
  USER_NICKNAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  NicknameIsTooLongError,
  NicknameIsTooShortError,
} from '../exception/error/nickname.error';
import { Nickname } from './nickname.model';

describe('Nickname', () => {
  const MIN_LENGTH_NICKNAME = 'a'.repeat(USER_NICKNAME_MIN_LENGTH);
  const MAX_LENGTH_NICKNAME = 'a'.repeat(USER_NICKNAME_MAX_LENGTH);
  const TOO_SHORT_NICKNAME = 'a'.repeat(USER_NICKNAME_MIN_LENGTH - 1);
  const TOO_LONG_NICKNAME = 'a'.repeat(USER_NICKNAME_MAX_LENGTH + 1);

  it('닉네임은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const nickname = MIN_LENGTH_NICKNAME;
    // when
    const actual = new Nickname(nickname);
    // then
    expect(actual.value).toBe(nickname);
  });

  it('닉네임은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const nickname = MAX_LENGTH_NICKNAME;
    // when
    const actual = new Nickname(nickname);
    // then
    expect(actual.value).toBe(nickname);
  });

  it('닉네임은 최소 길이보다 작은 닉네임을 전달하면 에러가 발생한다', () => {
    // given
    const nickname = TOO_SHORT_NICKNAME;
    // when
    const actual = () => new Nickname(nickname);
    // then
    expect(actual).toThrow(NicknameIsTooShortError);
  });

  it('닉네임은 최대 길이보다 큰 닉네임을 전달하면 에러가 발생한다', () => {
    // given
    const nickname = TOO_LONG_NICKNAME;
    // when
    const actual = () => new Nickname(nickname);
    // then
    expect(actual).toThrow(NicknameIsTooLongError);
  });
});
