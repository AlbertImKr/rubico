import { SignUpDto } from '../dto/auth.request.dto';
import { SignUpDtoTransformer } from './auth.dto.transformer';

describe('AuthDtoTransformer', () => {
  it('signupDto를 signupDataDto로 변환한다', () => {
    // given
    const signupDto: SignUpDto = {
      email: 'test@email.com',
      nickname: 'test',
      password: 'Password123!',
      address: '인천광역시 연수구',
      phoneNumber: '123-4567-8901',
    };

    // when
    const signupDataDto = SignUpDtoTransformer.toDto(signupDto);

    // then
    expect(signupDataDto.email.value).toBe(signupDto.email);
    expect(signupDataDto.nickname.value).toBe(signupDto.nickname);
    expect(signupDataDto.password.value).toBe(signupDto.password);
    expect(signupDataDto.address.value).toBe(signupDto.address);
    expect(signupDataDto.phoneNumber.value).toBe(signupDto.phoneNumber);
  });
});
