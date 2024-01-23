import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
} from '../constants/validator.constants';
import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { Password } from './password.model';

describe('Password', () => {
  const RIGHT_PASSWORD = 'Password123!';
  const DIFFERENT_PASSWORD = 'Password1234!';
  // 7글자(최소 8글자)
  const TOO_SHORT_PASSWORD =
    'Pa1!' + '1'.repeat(USER_PASSWORD_MIN_LENGTH - 4 - 1);
  // 21글자(최대 20글자)
  const TOO_LONG_PASSWORD =
    'Pa1!' + '1'.repeat(USER_PASSWORD_MAX_LENGTH - 4 + 1);
  const NOT_HAVE_UPPERCASE_PASSWORD = 'password123!';
  const NOT_HAVE_LOWERCASE_PASSWORD = 'PASSWORD123!';
  const NOT_HAVE_NUMBER_PASSWORD = 'Password!';
  const NOT_HAVE_SPECIAL_CHARACTER_PASSWORD = 'Password123';

  it('생성자에 정확한 비밀번호를 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const password = RIGHT_PASSWORD;

    // when
    const actual = new Password(password);

    // then
    expect(actual.value).toBe(password);
  });

  it('생성자에 최소 길이보다 작은 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = TOO_SHORT_PASSWORD;

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.USER_PASSWORD_TOO_SHORT);
  });

  it('생성자에 최대 길이보다 큰 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = TOO_LONG_PASSWORD;

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.USER_PASSWORD_TOO_LONG);
  });

  it('생성자에 영문 대문자가 없는 비밀번호를 전달하면 에러가 발생한다', async () => {
    // given
    const password = NOT_HAVE_UPPERCASE_PASSWORD;

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.USER_PASSWORD_NOT_MATCHES);
  });

  it('생성자에 영문 소문자가 없는 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = NOT_HAVE_LOWERCASE_PASSWORD;

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.USER_PASSWORD_NOT_MATCHES);
  });

  it('생성자에 숫자가 없는 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = NOT_HAVE_NUMBER_PASSWORD;

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.USER_PASSWORD_NOT_MATCHES);
  });

  it('생성자에 특수문자가 없는 비밀번호를 전달하면 에러가 발생한다', () => {
    // given
    const password = NOT_HAVE_SPECIAL_CHARACTER_PASSWORD;

    // when
    const actual = () => new Password(password);

    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.USER_PASSWORD_NOT_MATCHES);
  });

  it('isSame 메서드에 같은 비밀번호를 전달하면 true를 반환한다', () => {
    // given
    const password = new Password(RIGHT_PASSWORD);
    const samePassword = new Password(RIGHT_PASSWORD);

    // when
    const actual = password.isSame(samePassword);

    // then
    expect(actual).toBe(true);
  });

  it('isSame 메서드에 다른 비밀번호를 전달하면 false를 반환한다', () => {
    // given
    const password = new Password(RIGHT_PASSWORD);
    const differentPassword = new Password(DIFFERENT_PASSWORD);

    // when
    const actual = password.isSame(differentPassword);

    // then
    expect(actual).toBe(false);
  });
});
