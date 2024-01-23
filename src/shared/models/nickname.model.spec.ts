import {
  USER_NICKNAME_MAX_LENGTH,
  USER_NICKNAME_MIN_LENGTH,
} from '../constants/validator.constants';
import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { Nickname } from './nickname.model';

describe('Nickname', () => {
  const RIGHT_NICKNAME = 'a'.repeat(USER_NICKNAME_MIN_LENGTH);
  const TOO_SHORT_NICKNAME = 'a'.repeat(USER_NICKNAME_MIN_LENGTH - 1);
  const TOO_LONG_NICKNAME = 'a'.repeat(USER_NICKNAME_MAX_LENGTH + 1);

  it('생성자에 정확한 닉네임을 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const nickname = RIGHT_NICKNAME;
    // when
    const actual = new Nickname(nickname);
    // then
    expect(actual.value).toBe(nickname);
  });

  it('생성자에 최소 길이보다 작은 닉네임을 전달하면 에러가 발생한다', () => {
    // given
    const nickname = TOO_SHORT_NICKNAME;
    // when
    const actual = () => new Nickname(nickname);
    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.NICKNAME_TOO_SHORT);
  });

  it('생성자에 최대 길이보다 큰 닉네임을 전달하면 에러가 발생한다', () => {
    // given
    const nickname = TOO_LONG_NICKNAME;
    // when
    const actual = () => new Nickname(nickname);
    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.NICKNAME_TOO_LONG);
  });
});
