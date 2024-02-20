import { PhoneNumberIsNotMatchedError } from '../exception/error/phone.error';
import { PhoneNumber } from './phone-number.model';

describe('PhoneNumber', () => {
  const RIGHT_PHONE_NUMBER = '010-1234-5678';
  const WRONG_PHONE_NUMBER = '01012345678';

  it('생성자에 정확한 전화번호를 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const phoneNumber = RIGHT_PHONE_NUMBER;
    // when
    const actual = new PhoneNumber(phoneNumber);
    // then
    expect(actual.value).toBe(phoneNumber);
  });

  it('생성자에 전화번호 형식이 아닌 문자열을 전달하면 에러가 발생한다', () => {
    // given
    const wrongPhoneNumber = WRONG_PHONE_NUMBER;
    // when
    const actual = () => new PhoneNumber(wrongPhoneNumber);
    // then
    expect(actual).toThrow(PhoneNumberIsNotMatchedError);
  });
});
