import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
} from '../constants/validator.constants';
import { Password } from './password.model';

describe('Password', () => {
  it('생성자에 정확한 비밀번호를 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const password = 'Password123!';

    // when
    const actual = new Password(password);

    // then
    expect(actual.value).toBe(password);
  });

  it('생성자에 최소 길이보다 작은 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = 'Pass1!';

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(
      `비밀번호는 ${USER_PASSWORD_MIN_LENGTH}글자 이상이어야 합니다.`,
    );
  });

  it('생성자에 최대 길이보다 큰 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = 'Password123!'.repeat(6);

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(
      `비밀번호는 ${USER_PASSWORD_MAX_LENGTH}글자 이하이어야 합니다.`,
    );
  });

  it('생성자에 영문 대문자가 없는 비밀번호를 전달하면 에러가 발생한다', async () => {
    // given
    const password = 'password123!';

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(
      '비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 모두 포함해야 합니다.',
    );
  });

  it('생성자에 영문 소문자가 없는 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = 'PASSWORD123!';

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(
      '비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 모두 포함해야 합니다.',
    );
  });

  it('생성자에 숫자가 없는 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = 'Password!';

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(
      '비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 모두 포함해야 합니다.',
    );
  });

  it('생성자에 특수문자가 없는 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = 'Password123';

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(
      '비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 모두 포함해야 합니다.',
    );
  });

  it('isSame 메서드에 같은 비밀번호를 전달하면 true를 반환한다', () => {
    // given
    const password = new Password('Password123!');
    const samePassword = new Password('Password123!');

    // when
    const actual = password.isSame(samePassword);

    // then
    expect(actual).toBe(true);
  });

  it('isSame 메서드에 다른 비밀번호를 전달하면 false를 반환한다', () => {
    // given
    const password = new Password('Password123!');
    const notSamePassword = new Password('Password1234!');

    // when
    const actual = password.isSame(notSamePassword);

    // then
    expect(actual).toBe(false);
  });
});
