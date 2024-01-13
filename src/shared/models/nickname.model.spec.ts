import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { TestConstants } from '../test-utils/test.constants';
import { Nickname } from './nickname.model';

describe('Nickname', () => {
  const TOO_SHORT_NICKNAME = 'tes';
  const TOO_LONG_NICKNAME = 'a'.repeat(21);

  it('생성자에 정확한 닉네임을 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const nickname = TestConstants.USER_NICKNAME;
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
