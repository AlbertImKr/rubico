import {
  USER_ADDRESS_MAX_LENGTH,
  USER_ADDRESS_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  AddressIsTooLongError,
  AddressIsTooShortError,
} from '../exception/error/address.error';
import { Address } from './address.model';

describe('Address', () => {
  const MIN_LENGTH_ADDRESS = 'a'.repeat(USER_ADDRESS_MIN_LENGTH);
  const MAX_LENGTH_ADDRESS = 'a'.repeat(USER_ADDRESS_MAX_LENGTH);
  const TOO_SHORT_ADDRESS = 'a'.repeat(USER_ADDRESS_MIN_LENGTH - 1);
  const TOO_LONG_ADDRESS = 'a'.repeat(USER_ADDRESS_MAX_LENGTH + 1);

  it('주소는 최소 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const address = MIN_LENGTH_ADDRESS;

    // when
    const addressObject = new Address(address);

    // then
    expect(addressObject.value).toBe(address);
  });

  it('주소는 최대 제한 길이까지만 입력할 수 있다.', () => {
    // given
    const address = MAX_LENGTH_ADDRESS;

    // when
    const addressObject = new Address(address);

    // then
    expect(addressObject.value).toBe(address);
  });

  it('주소는 최소 길이보다 작은 주소를 전달하면 에러가 발생한다', () => {
    // given
    const address = TOO_SHORT_ADDRESS;

    // when
    const addressObject = () => new Address(address);

    // then
    expect(addressObject).toThrow(AddressIsTooShortError);
  });

  it('주소는 최대 길이보다 큰 주소를 전달하면 에러가 발생한다', () => {
    // given
    const address = TOO_LONG_ADDRESS;

    // when
    const addressObject = () => new Address(address);

    // then
    expect(addressObject).toThrow(AddressIsTooLongError);
  });
});
