import { ObjectId } from 'typeorm';
import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { Nickname } from '../../shared/models/nickname.model';
import { Password } from '../../shared/models/password.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';

export class SignUpDataDto {
  email: Email;
  nickname: Nickname;
  password: Password;
  address: Address;
  phoneNumber: PhoneNumber;
}

export class SignInDataDto {
  readonly email: Email;
  readonly password: Password;
}

export class LoginUserDataDto {
  readonly id: ObjectId;
  readonly nickname: Nickname;
}
