import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { Nickname } from '../../shared/models/nickname.model';
import { Password } from '../../shared/models/password.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { SignUpDto } from '../dto/auth.request.dto';
import { SignUpDataDto } from '../dto/signup.data.dto';

export class SignUpDtoTransformer {
  static toDto(signupDto: SignUpDto): SignUpDataDto {
    const { email, nickname, password, address, phoneNumber } = signupDto;
    return {
      email: new Email(email),
      nickname: new Nickname(nickname),
      password: new Password(password),
      address: new Address(address),
      phoneNumber: new PhoneNumber(phoneNumber),
    };
  }
}
