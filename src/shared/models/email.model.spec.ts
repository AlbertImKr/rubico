import { Email } from './email.model';

describe('Email', () => {
  it('생성자에 정확한 이메일을 전달하면 value 프로퍼티에 할당된다', async () => {
    // given
    const email = 'email@email.com';

    // when
    const actual = new Email(email);

    // then
    expect(actual.value).toBe(email);
  });

  it('생성자에 이메일 형식이 아닌 문자열을 전달하면 에러가 발생한다', async () => {
    // given
    const email = 'email';

    // when
    const actual = () => new Email(email);

    // then
    expect(actual).toThrow('이메일 형식이 올바르지 않습니다');
  });
});
