import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { Email } from './email.model';

describe('Email', () => {
  const RIGHT_EMAIL = 'email@email.com';
  const WRONG_EMAIL = 'email';

  it('생성자에 정확한 이메일을 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const email = RIGHT_EMAIL;

    // when
    const actual = new Email(email);

    // then
    expect(actual.value).toBe(email);
  });

  it('생성자에 이메일 형식이 아닌 문자열을 전달하면 에러가 발생한다', () => {
    // given
    const email = WRONG_EMAIL;

    // when
    const actual = () => new Email(email);

    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.EMAIL_NOT_MATCHES);
  });
});
