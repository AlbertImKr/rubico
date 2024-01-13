import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { Address } from './address.model';

describe('Address', () => {
  const RIGHT_ADDRESS = '인천광역시 연수구';
  const TOO_SHORT_ADDRESS = '인천시청';
  const TOO_LONG_ADDRESS = '인'.repeat(101);

  it('생성자에 정확한 주소를 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const address = RIGHT_ADDRESS;

    // when
    const addressObject = new Address(address);

    // then
    expect(addressObject.value).toBe(address);
  });

  it('생성자에 최소 길이보다 작은 주소를 전달하면 에러가 발생한다', () => {
    // given
    const address = TOO_SHORT_ADDRESS;

    // when
    const addressObject = () => new Address(address);

    // then
    expect(addressObject).toThrow(EXCEPTION_MESSAGES.ADDRESS_TOO_SHORT);
  });

  it('생성자에 최대 길이보다 큰 주소를 전달하면 에러가 발생한다', () => {
    // given
    const address = TOO_LONG_ADDRESS;

    // when
    const addressObject = () => new Address(address);

    // then
    expect(addressObject).toThrow(EXCEPTION_MESSAGES.ADDRESS_TOO_LONG);
  });
});
