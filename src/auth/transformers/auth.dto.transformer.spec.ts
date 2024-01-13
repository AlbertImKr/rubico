import { TestConstants } from '../../shared/test-utils/test.constants';
import { SignUpDto } from '../dto/auth.request.dto';
import { SignUpDataDtoTransformer } from './auth.dto.transformer';

describe('AuthDtoTransformer', () => {
  it('signupDto를 signupDataDto로 변환한다', () => {
    // given
    const signupDto: SignUpDto = {
      email: TestConstants.USER_EMAIL,
      nickname: TestConstants.USER_NICKNAME,
      password: TestConstants.USER_PASSWORD,
      address: TestConstants.USER_ADDRESS,
      phoneNumber: TestConstants.USER_PHONE_NUMBER,
    };

    // when
    const signupDataDto = SignUpDataDtoTransformer.toDto(signupDto);

    // then
    expect(signupDataDto.email.value).toBe(signupDto.email);
    expect(signupDataDto.nickname.value).toBe(signupDto.nickname);
    expect(signupDataDto.password.value).toBe(signupDto.password);
    expect(signupDataDto.address.value).toBe(signupDto.address);
    expect(signupDataDto.phoneNumber.value).toBe(signupDto.phoneNumber);
  });
});
