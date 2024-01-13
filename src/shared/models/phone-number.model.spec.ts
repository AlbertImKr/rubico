import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { PhoneNumber } from './phone-number.model';

describe('PhoneNumber', () => {
  it('생성자에 정확한 전화번호를 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const phoneNumber = '010-1234-5678';
    // when
    const actual = new PhoneNumber(phoneNumber);
    // then
    expect(actual.value).toBe(phoneNumber);
  });

  it('생성자에 전화번호 형식이 아닌 문자열을 전달하면 에러가 발생한다', () => {
    // given
    const wrongPhoneNumber = '01012345678';
    // when
    const actual = () => new PhoneNumber(wrongPhoneNumber);
    // then
    expect(actual).toThrow(EXCEPTION_MESSAGES.PHONE_NUMBER_NOT_MATCHES);
  });
});
