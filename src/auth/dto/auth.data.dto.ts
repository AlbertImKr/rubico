import { ObjectId } from 'typeorm';
import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { Nickname } from '../../shared/models/nickname.model';
import { Password } from '../../shared/models/password.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';

export class SignUpData {
  email: Email;
  nickname: Nickname;
  password: Password;
  address: Address;
  phoneNumber: PhoneNumber;
}

export class SignInData {
  readonly email: Email;
  readonly password: Password;
}

export class LoginUserData {
  readonly id: ObjectId;
  readonly nickname: Nickname;
}
