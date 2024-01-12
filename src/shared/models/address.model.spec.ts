import {
  USER_ADDRESS_MAX_LENGTH,
  USER_ADDRESS_MIN_LENGTH,
} from '../constants/validator.constants';
import { Address } from './address.model';

describe('Address', () => {
  it('생성자에 정확한 주소를 전달하면 value 프로퍼티에 할당된다', async () => {
    // given
    const address = '인천광역시 연수구';

    // when
    const addressObject = new Address(address);

    // then
    expect(addressObject.value).toBe(address);
  });

  it('생성자에 최소 길이보다 작은 주소를 전달하면 에러가 발생한다', async () => {
    // given
    const address = '인천광역';

    // when
    const addressObject = () => new Address(address);

    // then
    expect(addressObject).toThrow(
      `주소는 ${USER_ADDRESS_MIN_LENGTH}글자 이상이어야 합니다.`,
    );
  });

  it('생성자에 최대 길이보다 큰 주소를 전달하면 에러가 발생한다', async () => {
    // given
    const address = '인천광역시 연수구 미추홀구 남동구'.repeat(10);

    // when
    const addressObject = () => new Address(address);

    // then
    expect(addressObject).toThrow(
      `주소는 ${USER_ADDRESS_MAX_LENGTH}글자 이하이어야 합니다.`,
    );
  });
});
