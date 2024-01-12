import {
  USER_NICKNAME_MAX_LENGTH,
  USER_NICKNAME_MIN_LENGTH,
} from '../constants/validator.constants';
import { Nickname } from './nickname.model';

describe('Nickname', () => {
  it('생성자에 정확한 닉네임을 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const nickname = 'test';
    // when
    const actual = new Nickname(nickname);
    // then
    expect(actual.value).toBe(nickname);
  });

  it('생성자에 최소 길이보다 작은 닉네임을 전달하면 에러가 발생한다', () => {
    // given
    const nickname = 'te';
    // when
    const actual = () => new Nickname(nickname);
    // then
    expect(actual).toThrow(
      `닉네임은 ${USER_NICKNAME_MIN_LENGTH}글자 이상이어야 합니다.`,
    );
  });

  it('생성자에 최대 길이보다 큰 닉네임을 전달하면 에러가 발생한다', () => {
    // given
    const nickname = 'test'.repeat(6);
    // when
    const actual = () => new Nickname(nickname);
    // then
    expect(actual).toThrow(
      `닉네임은 ${USER_NICKNAME_MAX_LENGTH}글자 이하이어야 합니다.`,
    );
  });
});
